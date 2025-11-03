'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Input, Stack, Heading, Text, FormControl } from '@chakra-ui/react'
import { auth } from '../lib/api'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    // Validation
    if (!username.trim()) {
      setError('Username is required')
      return
    }
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    if (!password.trim()) {
      setError('Password is required')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    
    try {
      await auth.register({ username, email, password })
      router.push('/login')
    } catch (err: any) {
      if (err.response?.data?.detail) {
        setError(err.response.data.detail)
      } else {
        setError('Registration failed. Please try again.')
      }
      console.error('Registration error:', err)
    }
  }

  return (
    <Box maxW="md" mx="auto" mt={12} p={6} bg="white" boxShadow="sm" borderRadius="md">
      <Heading size="md" mb={4}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl>
            <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="brand">Register</Button>
        </Stack>
      </form>
    </Box>
  )
}
