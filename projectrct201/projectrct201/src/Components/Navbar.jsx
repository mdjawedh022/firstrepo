import { Box,Flex ,useColorModeValue} from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  
  return (
   <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
  <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
  <Box>Logo</Box>
  </Flex>
   </Box>
  )
}

export default Navbar
