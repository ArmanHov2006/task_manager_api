'use client'
/**
 * Main dashboard - Shows recent telemetry and stats
 */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { api } from '@/lib/api'

interface TelemetrySummary {
  total_events: number
  unique_domains: number
  avg_tab_count: number
  total_context_switches: number
  time_range_hours: number
}
interface TelemetryEvent {
  id: number
  timestamp: string
  active_domain: string
  active_title: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [summary, setSummary] = useState<TelemetrySummary | null>(null)
  const [recentEvents, setRecentEvents] = useState<TelemetryEvent[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const token = api.getToken()
    if (!token) { router.push('/login'); return }
    loadData()
    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [router])
  const loadData = async () => {
    try {
      const [s, e] = await Promise.all([api.getTelemetrySummary(24), api.getTelemetryRecent(20)])
      setSummary(s); setRecentEvents(e); setLoading(false)
    } catch { setLoading(false) }
  }
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin text-4xl mb-4">👻</div>
            <div className="text-gray-600">Loading dashboard...</div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-gray-600">Your productivity overview for the last 24 hours</p>
        </div>
        {summary && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard icon="📊" label="Total Events" value={summary.total_events} subtitle="Telemetry snapshots" />
            <StatCard icon="🌐" label="Unique Domains" value={summary.unique_domains} subtitle="Websites visited" />
            <StatCard icon="📑" label="Avg Tabs" value={summary.avg_tab_count.toFixed(1)} subtitle="Open at once" />
            <StatCard icon="🔄" label="Context Switches" value={summary.total_context_switches} subtitle="Tab changes" />
          </div>
        )}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentEvents.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <div className="text-4xl mb-4">👻</div>
                <div className="text-gray-600">No activity detected yet. Make sure the Chrome extension is installed and running.</div>
                <a href="chrome://extensions" className="inline-block mt-4 text-phantom-600 hover:text-phantom-700 font-medium">Check Extension Status →</a>
              </div>
            ) : (
              recentEvents.map((event) => <ActivityRow key={event.id} event={event} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, subtitle }: { icon: string; label: string; value: string | number; subtitle: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-2"><span className="text-2xl">{icon}</span></div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
      <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
    </div>
  )
}

function ActivityRow({ event }: { event: TelemetryEvent }) {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours}h ago`
    return date.toLocaleDateString()
  }
  return (
    <div className="px-6 py-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <span className="text-2xl flex-shrink-0">🌐</span>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">{event.active_title}</div>
            <div className="text-xs text-gray-500">{event.active_domain}</div>
          </div>
        </div>
        <div className="text-xs text-gray-500 ml-4 flex-shrink-0">{formatTime(event.timestamp)}</div>
      </div>
    </div>
  )
}


