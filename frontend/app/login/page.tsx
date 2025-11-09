'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Input, Stack, Heading, Text, FormControl } from '@chakra-ui/react'
import { auth } from '../lib/api'
import { useAuthStore } from '../store/auth'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const loginStore = useAuthStore((s) => s.login)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const data = await auth.login({ username, password })
      const token = data.access_token
      loginStore(token)
      router.push('/tasks')
    } catch (err: any) {
      if (err.response?.data?.detail) {
        setError(err.response.data.detail)
      } else {
        setError('An unexpected error occurred.')
      }
    }
  }

  return (
    <Box maxW="md" mx="auto" mt={12} p={6} bg="white" boxShadow="sm" borderRadius="md">
      <Heading size="md" mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="brand">Login</Button>
        </Stack>
      </form>
    </Box>
  )
}
