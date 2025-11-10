/**
 * Content script - Tracks page-level user activity
 */
let typingCount = 0
let lastTypingTime = Date.now()
let mouseMovements = []
let maxScrollDepth = 0

document.addEventListener('keydown', (e) => {
  if (e.key.length === 1) {
    typingCount++
  }
})

document.addEventListener('mousemove', (e) => {
  const now = Date.now()
  mouseMovements.push({ x: e.clientX, y: e.clientY, timestamp: now })
  if (mouseMovements.length > 50) mouseMovements.shift()
})

document.addEventListener('scroll', () => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollDepth = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
  maxScrollDepth = Math.max(maxScrollDepth, scrollDepth)
})

function calculateTypingVelocity() {
  const now = Date.now()
  const elapsedMinutes = (now - lastTypingTime) / 60000
  const velocity = elapsedMinutes > 0 ? Math.round(typingCount / elapsedMinutes) : 0
  typingCount = 0
  lastTypingTime = now
  return velocity
}

function calculateMouseVelocity() {
  if (mouseMovements.length < 2) return 0
  let totalDistance = 0
  let totalTime = 0
  for (let i = 1; i < mouseMovements.length; i++) {
    const prev = mouseMovements[i - 1]
    const curr = mouseMovements[i]
    const dx = curr.x - prev.x
    const dy = curr.y - prev.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const time = curr.timestamp - prev.timestamp
    totalDistance += distance
    totalTime += time
  }
  const velocity = totalTime > 0 ? Math.round((totalDistance / totalTime) * 1000) : 0
  return velocity
}

setInterval(() => {
  const typingVelocity = calculateTypingVelocity()
  const mouseVelocity = calculateMouseVelocity()
  chrome.runtime.sendMessage({
    type: 'ACTIVITY_UPDATE',
    typingVelocity,
    mouseVelocity,
    scrollDepth: maxScrollDepth
  })
  mouseMovements = []
}, 10000)


