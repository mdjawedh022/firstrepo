import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Avatar,Button} from '@chakra-ui/react'
import { Slider1 } from '../Components/Slider1'
import { Slider2 } from '../Components/slider2'
import  Table1 from '../Components/Table1'

function Dasboard() {
  return (
    <div>
      <Navbar/>
      <div className='d_main'>
    <div className='d_first'>
<div className='d_img'>
<Avatar w={40} h={40} m={10} src='https://bit.ly/broken-link' />
<Button  colorScheme='blue'>MY PROFILE</Button>
<p style={{margin:"5px"}}>Md Jawed</p>

<h4>---------------------------------------</h4>
<p>jawedhilmand022@gmail.com</p>
<p style={{marginBottom:"10px"}}>+91 9800000005</p>

</div>
<div >
    <div className='d_second'>
        <div className='d_second_1'>
            <p style={{fontSize:"13px",fontWeight:"550",margin:"7px"}}>Still in college and want to start a business already? Become our affiliate and kickstart your entrepreneurial journey. <span style={{color:"red",fontWeight:"600",fontSize:"16px"}}> Click here for details</span> </p>
        </div>
        <div className='d_second2'>
            <h1 style={{fontSize:"23px",fontWeight:"550",margin:"7px"}}>Recommended Courses</h1>
            
                <Slider1/>
                <h1 style={{fontSize:"23px",fontWeight:"550",margin:"7px"}}>Recommended internships</h1>
            
            <Slider2/>
       
           
        </div>
       

    </div>
</div>
    </div>
      </div>
{/* ................................................... */}
    <div style={{backgroundColor    :"aliceblue"}}>
    <Table1/>
    </div>


      <Footer/>
    </div>
  )
}

export default Dasboard
