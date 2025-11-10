'use client'
/**
 * Landing page - redirects to dashboard if authenticated
 */
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const token = api.getToken()
    router.push(token ? '/dashboard' : '/login')
  }, [router])
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-2xl text-phantom-600">Loading Phantom...</div>
    </div>
  )
}


