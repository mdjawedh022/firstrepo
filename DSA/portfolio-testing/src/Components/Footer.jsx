import { Box, useColorModeValue,Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box w={{base:'100%',md:"100%",lg:"100%"}} bg={useColorModeValue("gray.800","blue.800")} mt={'10px'} >
        <br />
        <Text color={'white'} p={'30px auto'}>Designed and build by Md Jawed Hussain, 2023 All rights reserved.</Text>
        <br />
      </Box>
    </>
  )
}

export default Footer
