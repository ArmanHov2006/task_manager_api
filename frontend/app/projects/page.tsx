'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Heading, List, ListItem, Text, Stack, Input, useToast, IconButton, Flex } from '@chakra-ui/react'
import { projects } from '../lib/api'
import { EditIcon } from '@chakra-ui/icons'
import { useAuth } from '../hooks/useAuth'

interface Project {
  id: number
  name: string
  description: string
}

export default function ProjectsPage() {
  const [items, setItems] = useState<Project[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const toast = useToast()
  const router = useRouter()
  const { isAuthenticated, isLoading: authLoading } = useAuth()

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, authLoading, router])

  const load = async () => {
    try {
      const data = await projects.getAll()
      setItems(data)
    } catch (err) {
      toast({
        title: 'Error loading projects',
        description: err instanceof Error ? err.message : 'An unexpected error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      })
    }
  }

  useEffect(() => { 
    if (isAuthenticated) {
      load() 
    }
  }, [isAuthenticated])

  const [isLoading, setIsLoading] = useState(false)

  const validateInput = () => {
    if (!name.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Project name is required',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'bottom'
      })
      return false
    }
    
    if (name.length > 100) {
      toast({
        title: 'Validation Error',
        description: 'Project name must be less than 100 characters',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'bottom'
      })
      return false
    }

    if (description.length > 500) {
      toast({
        title: 'Validation Error', 
        description: 'Description must be less than 500 characters',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'bottom'
      })
      return false
    }

    return true
  }

  const resetForm = () => {
    setName('')
    setDescription('')
    setEditingId(null)
  }

  const handleSubmit = async () => {
    if (!validateInput()) return
    setIsLoading(true)

    try {
      if (editingId !== null) {
        // Update existing project
        await projects.update(editingId, name, description)
        toast({
          title: 'Success',
          description: 'Project updated successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom'
        })
      } else {
        // Create new project
        await projects.create(name, description)
        toast({
          title: 'Success',
          description: 'Project created successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom'
        })
      }
      resetForm()
      load()
    } catch (err) {
      toast({
        title: `Error ${editingId ? 'updating' : 'creating'} project`,
        description: err instanceof Error ? err.message : 'An unexpected error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const startEdit = (id: number) => {
    const project = items.find(p => p.id === id)
    if (project) {
      setEditingId(id)
      setName(project.name)
      setDescription(project.description || '')
    }
  }

  const cancelEdit = () => {
    resetForm()
  }

  const handleEdit = async (id: number) => {
    try {
      const project = items.find(p => p.id === id)
      if (!project) return
      
      if (editingId === id) {
        // Save changes
        await projects.update(id, name, description)
        setEditingId(null)
        setName('')
        setDescription('')
        load()
        toast({
          title: 'Success',
          description: 'Project updated successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom'
        })
      } else {
        // Start editing
        setEditingId(id)
        setName(project.name)
        setDescription(project.description)
      }
    } catch (err) {
      toast({
        title: 'Error updating project',
        description: err instanceof Error ? err.message : 'An unexpected error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      })
    }
  }

  const del = async (id: number) => {
    try {
      await projects.delete(id)
      load()
      toast({
        title: 'Success',
        description: 'Project deleted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom'
      })
    } catch (err) {
      toast({
        title: 'Error deleting project',
        description: err instanceof Error ? err.message : 'An unexpected error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      })
    }
  }

  if (authLoading || !isAuthenticated) {
    return null
  }

  return (
    <Box maxW="3xl" mx="auto" mt={8} px={4}>
      <Heading mb={4}>Projects</Heading>
      <Stack direction={["column", "row"]} spacing={2} mb={4}>
        <Input 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          isInvalid={name.length > 100}
          isDisabled={isLoading}
        />
        <Input 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          maxLength={500}
          isInvalid={description.length > 500}
          isDisabled={isLoading}
        />
        <Button 
          onClick={handleSubmit}
          colorScheme={editingId !== null ? "green" : "brand"}
          minW="120px"
          leftIcon={editingId !== null ? <EditIcon /> : undefined}
          isLoading={isLoading}
          loadingText={editingId !== null ? "Saving..." : "Adding..."}
        >
          {editingId !== null ? 'Save Changes' : 'Add Project'}
        </Button>
        {editingId !== null && (
          <Button 
            onClick={cancelEdit}
            variant="ghost"
            isDisabled={isLoading}
          >
            Cancel
          </Button>
        )}
      </Stack>
      <List spacing={3}>
        {items.map((p) => (
          <ListItem 
            key={p.id} 
            p={4}
            borderWidth="1px"
            borderRadius="md"
            _hover={{ bg: "gray.50" }}
            bg={editingId === p.id ? "blue.50" : "white"}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box flex="1" mr={4}>
                <Text 
                  fontWeight="bold"
                  isTruncated
                  maxW="100%"
                  title={p.name}
                >
                  {p.name}
                </Text>
                <Text 
                  fontSize="sm" 
                  color="gray.600"
                  noOfLines={2}
                  title={p.description}
                >
                  {p.description}
                </Text>
              </Box>
              <Stack direction="row" spacing={2}>
                <Button
                  leftIcon={<EditIcon />}
                  size="sm"
                  colorScheme={editingId === p.id ? "green" : "blue"}
                  variant={editingId === p.id ? "solid" : "outline"}
                  onClick={() => startEdit(p.id)}
                  isDisabled={isLoading || (editingId !== null && editingId !== p.id)}
                >
                  {editingId === p.id ? 'Editing...' : 'Edit'}
                </Button>
                <Button
                  size="sm"
                  colorScheme="red"
                  variant="outline"
                  onClick={() => del(p.id)}
                  isDisabled={editingId === p.id}
                >
                  Delete
                </Button>
              </Stack>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
