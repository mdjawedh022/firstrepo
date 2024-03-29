import React from 'react'
import "./navbar.css"
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon,MoonIcon, SunIcon} from '@chakra-ui/icons';


  const Links = ['Home','About','Skill','Graph', 'Projects', 'Contact'];

  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  );

function Navbar({handleabout,handleprojects,handlecontacts,handleprofile,handleskills}) {
  const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className='navbar-section' >
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={"sticky"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontFamily={'serif'} fontSize={30}>M J</Box>
          </HStack>
          <Flex alignItems={'center'}>
          <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <NavLink onClick={handleprofile}>Home</NavLink>
              <NavLink onClick={handleabout}>About</NavLink>
              <NavLink onClick={handleskills}>Skill</NavLink>
              <NavLink>Graph</NavLink>
              <NavLink onClick={handleprojects}>Projects</NavLink>
              <NavLink onClick={handlecontacts}>Contact</NavLink>
            </HStack>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            <Menu>
            
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
   
          </Box>
        ) : null}
         
      </Box>
     
      <Box p={4}></Box>
    </div>
  )
}

export default Navbar
