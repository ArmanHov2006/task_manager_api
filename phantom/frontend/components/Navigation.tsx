'use client'
/**
 * Navigation component for authenticated pages
 */
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'

interface User { username: string; email: string; is_premium: boolean }

export default function Navigation() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  useEffect(() => { loadUser() }, [])
  const loadUser = async () => {
    try { const userData = await api.getCurrentUser(); setUser(userData) }
    catch { router.push('/login') }
  }
  const handleLogout = () => { api.logout(); router.push('/login') }
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl">👻</span>
              <span className="ml-2 text-xl font-bold text-gray-900">Phantom</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/dashboard" className="border-phantom-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Dashboard</Link>
              <Link href="/insights" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Insights</Link>
              <Link href="/settings" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Settings</Link>
            </div>
          </div>
          <div className="flex items-center">
            {user && (
              <div className="relative">
                <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center space-x-3 text-sm focus:outline-none">
                  <div className="text-right hidden sm:block">
                    <div className="font-medium text-gray-900">{user.username}</div>
                    <div className="text-xs text-gray-500">{user.is_premium ? '⭐ Premium' : 'Free'}</div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-phantom-500 flex items-center justify-center text-white font-semibold">
                    {user.username[0].toUpperCase()}
                  </div>
                </button>
                {showUserMenu && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setShowUserMenu(false)} />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20 border border-gray-200">
                      <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">{user.email}</div>
                      <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                      {!user.is_premium && (
                        <Link href="/upgrade" className="block px-4 py-2 text-sm text-phantom-600 hover:bg-phantom-50">⭐ Upgrade to Premium</Link>
                      )}
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}


