/**
 * Background service worker - Core telemetry collection engine
 */
const API_URL = 'http://localhost:8000'
const TELEMETRY_INTERVAL = 30000
const MAX_RETRY_ATTEMPTS = 3

let lastActiveTab = null
let contextSwitchCount = 0
let lastActivityTime = Date.now()
let typingVelocity = 0
let mouseVelocity = 0

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('collectTelemetry', { periodInMinutes: 0.5 })
  chrome.storage.local.set({
    isAuthenticated: false,
    userId: null,
    authToken: null
  })
})

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  contextSwitchCount++
  lastActivityTime = Date.now()
  const tab = await chrome.tabs.get(activeInfo.tabId)
  lastActiveTab = tab
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    lastActiveTab = tab
    lastActivityTime = Date.now()
  }
})

async function collectTelemetrySnapshot() {
  try {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (!activeTab) return null
    const allTabs = await chrome.tabs.query({})
    const idleState = await chrome.idle.queryState(15)
    const idleSeconds = idleState === 'idle' ? Math.floor((Date.now() - lastActivityTime) / 1000) : 0
    let domain = 'unknown'
    try {
      const url = new URL(activeTab.url)
      domain = url.hostname
    } catch {
      domain = 'local'
    }
    const telemetryEvent = {
      timestamp: new Date().toISOString(),
      active_url: activeTab.url,
      active_domain: domain,
      active_title: activeTab.title || 'Untitled',
      tab_count: allTabs.length,
      context_switches_5min: contextSwitchCount,
      typing_velocity: typingVelocity,
      mouse_velocity: mouseVelocity,
      idle_seconds: idleSeconds,
      scroll_depth: 0.0
    }
    contextSwitchCount = 0
    typingVelocity = 0
    mouseVelocity = 0
    return telemetryEvent
  } catch (error) {
    console.error('Error collecting telemetry:', error)
    return null
  }
}

async function sendTelemetry(event, attempt = 1) {
  const { authToken } = await chrome.storage.local.get(['authToken'])
  if (!authToken) return
  try {
    const response = await fetch(`${API_URL}/telemetry/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(event)
    })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    await response.json()
  } catch (error) {
    if (attempt < MAX_RETRY_ATTEMPTS) {
      const delay = Math.pow(2, attempt) * 1000
      setTimeout(() => sendTelemetry(event, attempt + 1), delay)
    }
  }
}

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'collectTelemetry') {
    const event = await collectTelemetrySnapshot()
    if (event) await sendTelemetry(event)
  }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'ACTIVITY_UPDATE') {
    typingVelocity = message.typingVelocity || 0
    mouseVelocity = message.mouseVelocity || 0
    lastActivityTime = Date.now()
  }
  if (message.type === 'AUTHENTICATE') {
    chrome.storage.local.set({
      isAuthenticated: true,
      authToken: message.token,
      userId: message.userId
    })
    sendResponse({ success: true })
  }
  return true
})


