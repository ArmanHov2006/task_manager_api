'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Heading, List, ListItem, Checkbox, Text, Stack, IconButton, Input, useToast } from '@chakra-ui/react'
import { tasks } from '../lib/api'
import { useAuth } from '../hooks/useAuth'

interface Task {
  id: number
  title: string
  description: string | null
  completed: boolean
}

export default function TasksPage() {
  const [items, setItems] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
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
      const data = await tasks.getAll()
      setItems(data)
    } catch (err) {
      toast({
        title: 'Error loading tasks',
        description: 'Unable to load your tasks. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
      console.error(err)
    }
  }

  useEffect(() => { 
    if (isAuthenticated) {
      load() 
    }
  }, [isAuthenticated])

  const handleAdd = async () => {
    if (!title.trim()) {
      toast({
        title: 'Title is required',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
      })
      return
    }

    setIsLoading(true)
    try {
      await tasks.create(title, description)
      setTitle('')
      setDescription('')
      load()
      toast({
        title: 'Task created',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
      })
    } catch (err) {
      toast({
        title: 'Error creating task',
        description: 'Unable to create task. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const toggle = async (task: Task) => {
    try {
      await tasks.update(task.id, { completed: !task.completed })
      load()
      toast({
        title: task.completed ? 'Task marked as incomplete' : 'Task completed',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'bottom',
      })
    } catch (err) {
      toast({
        title: 'Error updating task',
        description: 'Unable to update task status. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
    }
  }

  const del = async (id: number) => {
    try {
      await tasks.delete(id)
      load()
      toast({
        title: 'Task deleted',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
      })
    } catch (err) {
      toast({
        title: 'Error deleting task',
        description: 'Unable to delete task. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      })
    }
  }

  if (authLoading || !isAuthenticated) {
    return null
  }

  return (
    <Box maxW="3xl" mx="auto" mt={8}>
      <Heading mb={4}>Tasks</Heading>
      <Stack direction={["column", "row"]} spacing={2} mb={4}>
        <Input 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          isDisabled={isLoading}
        />
        <Input 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
          isDisabled={isLoading}
        />
        <Button 
          onClick={handleAdd} 
          colorScheme="brand"
          isLoading={isLoading}
          loadingText="Adding..."
        >
          Add Task
        </Button>
      </Stack>
      <List spacing={3}>
        {items.map((t) => (
          <ListItem key={t.id} display="flex" alignItems="center" justifyContent="space-between">
            <Stack direction="row" align="center" spacing={3}>
              <Checkbox 
                isChecked={t.completed} 
                onChange={() => toggle(t)}
                size="lg"
                colorScheme="green"
              />
              <Box>
                <Text 
                  fontWeight="bold" 
                  textDecoration={t.completed ? 'line-through' : 'none'}
                  color={t.completed ? 'gray.500' : 'inherit'}
                >
                  {t.title}
                </Text>
                {t.description && (
                  <Text 
                    fontSize="sm" 
                    color={t.completed ? 'gray.500' : 'gray.600'}
                    textDecoration={t.completed ? 'line-through' : 'none'}
                  >
                    {t.description}
                  </Text>
                )}
              </Box>
            </Stack>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => del(t.id)}
              ml={2}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
