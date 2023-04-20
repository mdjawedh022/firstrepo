import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import Product from './Product';
import SideBar from './SideBar';

const MainPage = () => {
  return (
    <>
      <Box display={'grid'}
      gridTemplateColumns={"repeat(2,15% 83%)"}
      mt="50px"
      >
        
         <Box borderWidth={'1px'}><SideBar/></Box>
         <Box >
            <Product/>
         </Box>
        
      </Box>
    </>
  )
}

export default MainPage;