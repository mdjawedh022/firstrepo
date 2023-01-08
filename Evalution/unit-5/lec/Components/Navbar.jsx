import React from 'react'
import { Flex } from '@chakra-ui/react'

function Navbar() {
  return (
    <div>
      <Flex spacing={3} bg={"red.400"}><Heading>Counter</Heading>
      <Heading>Todo</Heading>
      </Flex>
    </div>
  )
}

export default Navbar
