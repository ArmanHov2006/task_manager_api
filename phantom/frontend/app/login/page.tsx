'use client'
/**
 * Login page with registration option
 */
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

export default function LoginPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (isLogin) {
        await api.login({ username, password })
        router.push('/dashboard')
      } else {
        await api.register({ email, username, password })
        await api.login({ username, password })
        router.push('/dashboard')
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ||
          (isLogin ? 'Login failed. Please check your credentials.' : 'Registration failed. Please try again.')
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-phantom-50 to-white px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="text-6xl mb-4">👻</div>
          <h2 className="text-4xl font-bold text-gray-900">Phantom</h2>
          <p className="mt-2 text-gray-600">Ambient Productivity AI</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                isLogin ? 'bg-white text-phantom-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                !isLogin ? 'bg-white text-phantom-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Register
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required={!isLogin}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-phantom-500 focus:border-transparent outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>
            )}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-phantom-500 focus:border-transparent outline-none transition-all"
                placeholder="yourusername"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-phantom-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
                minLength={8}
              />
              {!isLogin && <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>}
            </div>
            {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-phantom-600 hover:bg-phantom-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Please wait...' : isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? (
              <>
                Don&apos;t have an account?{' '}
                <button type="button" onClick={() => setIsLogin(false)} className="text-phantom-600 hover:text-phantom-700 font-medium">
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={() => setIsLogin(true)} className="text-phantom-600 hover:text-phantom-700 font-medium">
                  Login
                </button>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4"><div className="text-2xl mb-2">🧠</div><div className="text-xs text-gray-600">AI Mode Detection</div></div>
          <div className="bg-white rounded-lg p-4"><div className="text-2xl mb-2">⚡</div><div className="text-xs text-gray-600">Auto Orchestration</div></div>
          <div className="bg-white rounded-lg p-4"><div className="text-2xl mb-2">👻</div><div className="text-xs text-gray-600">Ghost Mode</div></div>
        </div>
      </div>
    </div>
  )
}


