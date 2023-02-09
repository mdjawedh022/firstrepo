import { Box,Image,ColorModeToggle } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-scroll";
import img from '../Data/logoMj.png'
import "./navbar.css"
const Navbar = () => {
  return (
    <>
    <Box display={"flex"}
    w={{base:"100%",md:"100%",lg:'100%'}}
     padding={'5px 30px'}
     position={'fixed'}
     top={'0'}
    //  zIndex={'3'}
     justifyContent={'space-between'}
     alignItems={'center'}
     boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Box >
        <Image src={img} w={{base:"15%",md:"20%",lg:'20%'}}
        />
        </Box>
      <Box gap={'20px'} display={'flex'}>
      <Box gap={'20px'} display={'flex'}>
        <Link>
        <button className='button-navbar-link'>Home</button>
        </Link>
      <Link to="about" smooth={true} duration={1000}>
           <button className='button-navbar-link'>About</button> 
        </Link>
        <Link to="skills" smooth={true} duration={1000}>
            <button className='button-navbar-link'>Skills</button>
        </Link>
        <Link to="project" smooth={true} duration={1000}>
            <button className='button-navbar-link'>Projects</button>
        </Link>
        
        <Link to="contact" smooth={true} duration={1000}>
        <button className='button-navbar-link'>Contact</button>
        </Link>
        <Link><button className='button-navbar-link'>Resume</button></Link>

      </Box>
      <Box>
      <ColorModeToggle />
      </Box>
        <Box>abh</Box>
      </Box>
     
    </Box>
    </>
  )
}

export default Navbar
