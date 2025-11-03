import { create } from 'zustand'

interface AuthState {
  token: string | null
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
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
}))

// Initialize the store on the client side
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token')
  if (token) {
    useAuthStore.getState().login(token)
  }
}