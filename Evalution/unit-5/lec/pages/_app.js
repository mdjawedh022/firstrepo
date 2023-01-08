import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import Navbar from '../Components/Navbar';
export default function App({ Component, pageProps }) {
  return 
  (
    <ChakraProvider>
      <Navbar/>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}
