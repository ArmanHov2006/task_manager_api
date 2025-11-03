import Link from 'next/link'
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box maxW="3xl" mx="auto" mt={12} p={6} bg="white" boxShadow="sm" borderRadius="md">
      <Heading mb={4}>Welcome to Task Manager</Heading>
      <Text mb={4}>A lightweight task & project manager. Register or login to get started.</Text>
      <Stack direction="row" spacing={3}>
        <Link href="/login">
          <Button colorScheme="brand">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </Stack>
    </Box>
  )
}