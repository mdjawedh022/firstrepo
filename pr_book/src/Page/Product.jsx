import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataAppend } from '../redux/product/product.action'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { useLocation, useSearchParams } from 'react-router-dom'

const Product = () => {
    const dispatch=useDispatch()
    const{products,isloading}=useSelector((store)=>store.productReducers)
    const location=useLocation()
    const [searchParams]=useSearchParams()
    console.log(location);

  useEffect(()=>{
    let paramObj={
params:{
  brand:searchParams.getAll('brand')
}
    }
    dispatch(dataAppend(paramObj))
  },[location.search])

  
  return (
    <Box 
    w={'95%'}
    m={' 20px auto'}
    display={"grid"}
    gridTemplateColumns={"repeat(auto-fit,minmax(300px,max-content))"}
    gap="20px"
    >
        {isloading?<Flex align={'center'}><Spinner
      
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /></Flex>:products.map((el)=>(
        <Box key={el.id} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={'10px'}padding={'10px'} fontWeight={500}>
            <Image src={el.image} alt="images"/>
            <Text>{el.name}</Text>
            <Text>{el.brand}</Text>
            <Text>{el.category}</Text>
            <Flex gap={'10px'}><Text>₹{el.price}</Text>
            <Text textDecoration={"line-through"} color='red'>₹{el.original_price}</Text>
            <Text>({el.discount}% off)</Text></Flex>
        </Box>
      ))}
    </Box>
  )
}

export default Product
