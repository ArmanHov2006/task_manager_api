import { create } from 'zustand'
import { jwtDecode } from 'jwt-decode'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  validateToken: () => void
}

const getInitialState = () => ({
  token: null,
  isAuthenticated: false,
})

export const useAuthStore = create<AuthState>((set) => ({
  ...getInitialState(),
  login: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token)
      set({ token, isAuthenticated: true })
    }
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
      set({ token: null, isAuthenticated: false })
    }
  },
  validateToken: () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const decodedToken: { exp: number } = jwtDecode(token)
          if (decodedToken.exp * 1000 > Date.now()) {
            set({ token, isAuthenticated: true })
          } else {
            localStorage.removeItem('token')
            set({ token: null, isAuthenticated: false })
          }
        } catch (error) {
          localStorage.removeItem('token')
          set({ token: null, isAuthenticated: false })
        }
      }
    }
  }
}))
