import { Providers } from './providers'
import './globals.css'
import Navbar from './components/Navbar'
import { headers } from 'next/headers'

export const metadata = {
  title: 'Task Manager',
  description: 'Modern task management application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Force dynamic rendering
  headers()
  
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}