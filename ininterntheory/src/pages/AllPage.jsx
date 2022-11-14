import React from 'react'
import Five from '../Components/Five'
import Footer from '../Components/Footer'
import Four from '../Components/Four'
import Navbar from '../Components/Navbar'
import Second from '../Components/Second'
import {SlidingComp} from '../Components/SlidingComp'
import Third from '../Components/Third'
import Top from '../Components/Top'

function AllPage() {
  return (
    <div >
      <Navbar/>
      <Top/>
      <Second/>
      <Third/>
      <Four/>
      <Five/>
      <SlidingComp/>
      <Footer/>
      
    </div>
  )
}

export default AllPage
