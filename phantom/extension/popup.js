/**
 * Popup UI logic
 */
const API_URL = 'http://localhost:8000'

document.addEventListener('DOMContentLoaded', async () => {
  const { isAuthenticated, authToken } = await chrome.storage.local.get(['isAuthenticated', 'authToken'])
  if (isAuthenticated && authToken) {
    showAuthenticatedUI()
    updateStats()
  } else {
    showLoginUI()
  }

  document.getElementById('login-btn').addEventListener('click', async () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if (!username || !password) {
      alert('Please enter username and password')
      return
    }
    try {
      const formBody = new URLSearchParams()
      formBody.set('username', username)
      formBody.set('password', password)
      const response = await fetch(`${API_URL}/auth/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString()
      })
      if (!response.ok) throw new Error('Authentication failed')
      const data = await response.json()
      chrome.runtime.sendMessage(
        { type: 'AUTHENTICATE', token: data.access_token, userId: null },
        (res) => {
          if (res && res.success) {
            showAuthenticatedUI()
            updateStats()
          }
        }
      )
    } catch (error) {
      console.error('Login error:', error)
      alert('Login failed. Please check your credentials.')
    }
  })

  document.getElementById('logout-btn').addEventListener('click', async () => {
    await chrome.storage.local.set({ isAuthenticated: false, authToken: null, userId: null })
    showLoginUI()
  })
})

function showLoginUI() {
  document.getElementById('status').className = 'status inactive'
  document.getElementById('status').textContent = 'Not Connected'
  document.getElementById('auth-section').style.display = 'flex'
  document.getElementById('stats-section').style.display = 'none'
}

function showAuthenticatedUI() {
  document.getElementById('status').className = 'status active'
  document.getElementById('status').textContent = 'Connected & Monitoring'
  document.getElementById('auth-section').style.display = 'none'
  document.getElementById('stats-section').style.display = 'block'
}

async function updateStats() {
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true })
  const allTabs = await chrome.tabs.query({})
  if (activeTab) {
    let domain = 'unknown'
    try {
      const url = new URL(activeTab.url)
      domain = url.hostname
    } catch {
      domain = 'local'
    }
    document.getElementById('domain').textContent = domain
  }
  document.getElementById('tabs').textContent = allTabs.length
  setTimeout(updateStats, 5000)
}


