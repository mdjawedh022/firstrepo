import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
  <Box borderWidth={"1px"} p={'20px'} fontWeight={'500'} position={'fixed'} top={'0'} w={{base:"100%",md:"100%",lg:"100%"}} bg={'white'} zIndex={'3'}> 
   <Flex> <Box align={"center"} gap={'30px'} display={{base:"none",md:"none",lg:"flex"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/books/:id/edit">EditBook</Link>
        <Link to="/books/:id">SingleBook</Link>
    </Box>
    <Box></Box>
    </Flex>
  </Box>
  </>
  )
}

export default Navbar
