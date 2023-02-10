import { Box,Image,Button,useColorModeValue } from '@chakra-ui/react'
import ColorModeToggle from './ColorModeToggle';  
import img from '../Data/logoMj.png'
import { Link } from "react-scroll";
import React from 'react'


import "./navbar.css"
import SideDrawer from './SideDrawer';
const Navbar = () => {
  return (
    <>
    <Box display={"flex"}
  bg={useColorModeValue('gray.100', 'blue.800')}
    w={{base:"100%",md:"100%",lg:'100%'}}
     padding={'5px 30px'}
     position={'fixed'}
     top={'0'}
    zIndex={'3'}
     justifyContent={'space-between'}
     alignItems={'center'}
     boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Box >
        <Image src={img} w={{base:"24%",md:"17%",lg:'17%'}}
        borderRadius={'40px'}
        margin={{base:'2px',md:'1px',lg:'5px'}}
        />
        </Box>
      <Box gap={'20px'} display={'flex'}>
      <Box gap={'20px'} display={{base:'none',md:'none',lg:"flex"}} >
        <Link>
        <Button className='button-navbar-link'>Home</Button>
        </Link>
      <Link to="about" smooth={true} duration={1000}>
           <Button className='button-navbar-link'>About</Button> 
        </Link>
        <Link to="skills" smooth={true} duration={1000}>
            <Button className='button-navbar-link'>Skills</Button>
        </Link>
        <Link to="project" smooth={true} duration={1000}>
            <Button className='button-navbar-link'>Projects</Button>
        </Link>
        
        <Link to="contact" smooth={true} duration={1000}>
        <Button className='button-navbar-link'>Contact</Button>
        </Link>
        <Link><Button className='button-navbar-link'>Resume</Button></Link>

      </Box>
      <Box>
      <ColorModeToggle />
      </Box>
        <Box display={{base:"block",md:'block',lg:'none'}}><SideDrawer/></Box>
      </Box>
     
    </Box>
    </>
  )
}

export default Navbar
