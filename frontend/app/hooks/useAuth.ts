import { useEffect, useState } from 'react'
import { useAuthStore } from '../store/auth'

export function useAuth() {
  const [mounted, setMounted] = useState(false)
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  const token = useAuthStore((s) => s.token)
  const login = useAuthStore((s) => s.login)
  const logout = useAuthStore((s) => s.logout)

  useEffect(() => {
    useAuthStore.getState().validateToken()
    setMounted(true)
  }, [])

  return {
    isAuthenticated: mounted ? isAuthenticated : false,
    token: mounted ? token : null,
    login,
    logout,
    isLoading: !mounted
  }
}