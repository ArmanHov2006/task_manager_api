import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  withCredentials: true
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        window.location.href = '/login'
        alert('Session expired. Please log in again.')
      }
    }
    return Promise.reject(error)
  }
)

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export interface LoginCredentials {
  username: string
  password: string
}

export interface RegisterData {
  username: string
  email: string
  password: string
}

export interface Task {
  id: number
  title: string
  description?: string
  completed: boolean
}

export interface Project {
  id: number
  name: string
  description: string
}

export const auth = {
  login: async (credentials: LoginCredentials) => {
    const formData = new FormData()
    formData.append('username', credentials.username)
    formData.append('password', credentials.password)
    const response = await api.post('/auth/token', formData)
    return response.data
  },
  register: async (data: RegisterData) => {
    try {
      console.log('Sending registration request:', {
        username: data.username,
        email: data.email,
        password: '***'
      })
      const response = await api.post('/auth/register', data)
      console.log('Registration successful:', response.data)
      return response.data
    } catch (error: any) {
      console.error('Registration failed:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      })
      throw error
    }
  }
}

export const tasks = {
  getAll: async () => {
    const response = await api.get('/tasks')
    return response.data
  },
  create: async (title: string, description?: string) => {
    const response = await api.post('/tasks', { title, description })
    return response.data
  },
  update: async (id: number, data: Partial<Task>) => {
    const response = await api.put(`/tasks/${id}`, data)
    return response.data
  },
  delete: async (id: number) => {
    await api.delete(`/tasks/${id}`)
  }
}

export const projects = {
  getAll: async () => {
    const response = await api.get('/projects')
    return response.data
  },
  create: async (name: string, description: string) => {
    const response = await api.post('/projects', { name, description })
    return response.data
  },
  update: async (id: number, name: string, description: string) => {
    const response = await api.put(`/projects/${id}`, { name, description })
    return response.data
  },
  delete: async (id: number) => {
    await api.delete(`/projects/${id}`)
  }
}