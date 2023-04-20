import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Shoe from '../products/Shoe'
import Cloths from '../products/Cloths'

const Allroutes = () => {
  return (
    <>
      <Box>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shoe" element={<Shoe/>} />
        <Route path="/cloths" element={<Cloths/>}/>
        <Route path="*" element={<h1>page not found 404</h1>}/>
       </Routes>
      </Box>
    </>
  )
}

export default Allroutes
