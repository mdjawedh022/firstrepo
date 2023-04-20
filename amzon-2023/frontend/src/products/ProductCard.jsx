import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({images,messaging,subtitle,colorType,title,price}) => {
  return (
    <>
    
      <Box>
              <Image src={images} alt="nike"/>
             <Flex flexDirection={'column'} p={'5px'} fontWeight={400}>
             <Text color={"red.500"}>{messaging}</Text>
              <Text>{title}</Text>
              <Text color={"gray.400"}>{subtitle}</Text>
              <Text color={"gray.400"}>{colorType}</Text>
              <Text>MRP: ₹{price}</Text>
             </Flex>
            </Box>
    </>
  )
}
export default ProductCard