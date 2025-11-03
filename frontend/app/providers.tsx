'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { useEffect, useState } from 'react'

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <>{children}</>
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientOnly>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </ClientOnly>
  )
}