'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Box, Flex, Button, HStack, Text, Skeleton } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
  const router = useRouter()
  const { isAuthenticated, logout, isLoading } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <Box as="header" bg="white" boxShadow="sm" px={4} py={3}>
      <Flex align="center" justify="space-between" maxW="6xl" mx="auto">
        <Link href="/">
          <Text fontWeight="bold">Task Manager</Text>
        </Link>
        <HStack spacing={3}>
          {isLoading ? (
            <Skeleton height="40px" width="200px" />
          ) : isAuthenticated ? (
            <>
              <Button
                as={Link}
                href="/tasks"
                variant="ghost"
              >
                Tasks
              </Button>
              <Button
                as={Link}
                href="/projects"
                variant="ghost"
              >
                Projects
              </Button>
              <Button 
                colorScheme="red" 
                onClick={() => {
                  logout()
                  router.push('/login')
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                as={Link}
                href="/login"
                variant="ghost"
              >
                Login
              </Button>
              <Button
                as={Link}
                href="/register"
                variant="ghost"
              >
                Register
              </Button>
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  )
}
