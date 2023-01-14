"use client"
import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <Box as="section" p="8">
      <h4 className='text-2xl font-medium'>Image gallery</h4>
      <Flex>
        <Box w="32" h="32" mx="4" my="4" shadow={"md"} bg="gray.700"></Box>
        <Box w="32" h="32" mx="4" my="4" shadow={"md"} bg="gray.700"></Box>
        <Box w="32" h="32" mx="4" my="4" shadow={"md"} bg="gray.700"></Box>
      </Flex>
     
    </Box>
  )
}

export default page