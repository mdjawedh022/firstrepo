import { Box} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductSlider from '../Components/ProductSlider'
import { useDispatch, useSelector } from 'react-redux'
import { getDataCloths } from '../Redux/Cloths/action'
import ProductCard from './ProductCard'

const Cloths = () => {
  const dispatch=useDispatch();
  const {cloths}=useSelector((store)=>store.clothsReducers)

  useEffect(()=>{
dispatch(getDataCloths())
  },[dispatch])
  console.log(cloths)

  return (
    <>
      <Box mt={{lg:'7%'}}>
        <Box w={"95%"} display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(300px, max-content))"} gap={'15px'} m={'auto'}>
          {cloths.length>0 && cloths.map((el,i)=>(
          <ProductCard key={i} {...el}/>
          ))}
        </Box>
    <ProductSlider/>
      </Box>
    </>
  )
}

export default Cloths;

