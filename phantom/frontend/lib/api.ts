/**
 * API client for Phantom backend
 * Handles authentication, token management, and request formatting
 */
import axios, { AxiosInstance, AxiosError } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

interface LoginCredentials { username: string; password: string }
interface RegisterData { email: string; username: string; password: string }
interface TokenResponse { access_token: string; token_type: string }

class APIClient {
  private client: AxiosInstance
  private token: string | null = null

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: { 'Content-Type': 'application/json' },
    })
    this.client.interceptors.request.use((config) => {
      if (this.token) config.headers.Authorization = `Bearer ${this.token}`
      return config
    })
    this.client.interceptors.response.use(
      (res) => res,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          this.clearToken()
          if (typeof window !== 'undefined') window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('phantom_token')
      if (stored) this.token = stored
    }
  }
  setToken(token: string) {
    this.token = token
    if (typeof window !== 'undefined') localStorage.setItem('phantom_token', token)
  }
  clearToken() {
    this.token = null
    if (typeof window !== 'undefined') localStorage.removeItem('phantom_token')
  }
  getToken() { return this.token }

  async login(credentials: LoginCredentials): Promise<TokenResponse> {
    const body = new URLSearchParams()
    body.set('username', credentials.username)
    body.set('password', credentials.password)
    const response = await this.client.post<TokenResponse>('/auth/token', body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    this.setToken(response.data.access_token)
    return response.data
  }
  async register(data: RegisterData) {
    const response = await this.client.post('/users/', data)
    return response.data
  }
  async getCurrentUser() {
    const response = await this.client.get('/auth/me')
    return response.data
  }
  async logout() { this.clearToken() }
  async getTelemetryRecent(limit: number = 50) {
    const response = await this.client.get(`/telemetry/recent?limit=${limit}`)
    return response.data
  }
  async getTelemetrySummary(hours: number = 24) {
    const response = await this.client.get(`/telemetry/summary?hours=${hours}`)
    return response.data
  }
}
export const api = new APIClient()


