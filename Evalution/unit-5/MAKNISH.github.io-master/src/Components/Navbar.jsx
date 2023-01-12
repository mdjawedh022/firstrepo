import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ColorModeToggle from './ColorModeToggle';
import img from "../Data/mn-logo.jpg";


// const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const NavLink = ({children}) => (
  <Link
    fontSize={'18px'}
    fontWeight={700}
    px={3}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('blue.200', 'blue.700'),
    }}
    >
    {children}
  </Link>
);

export default function Navbar({handleHome, handleAbout, handleSkills, handleProjects, handleContacts}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.50', 'blue.900')} px={4} position={'fixed'} zIndex={3}  width={'100%'} >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Avatar
                size={'lg'}
                src={img}
                link={'https://maknish.github.io'}
                cursor="pointer"
            />
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>

            <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
             <div onClick={handleHome}> <NavLink>Home</NavLink></div>
             <div onClick={handleAbout}>  <NavLink>About</NavLink></div>
             <div onClick={handleSkills}> <NavLink>Skills</NavLink></div>
             <div onClick={handleProjects}> <NavLink>Projects</NavLink></div>
             <div onClick={handleContacts}>    <NavLink>Contacts</NavLink></div>
             
            </HStack>
            </Menu>
          <ColorModeToggle />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <NavLink><div onClick={handleHome}>Home</div></NavLink>
              <NavLink><div onClick={handleAbout}>About</div></NavLink>
              <NavLink><div onClick={handleSkills}>Skills</div></NavLink>
              <NavLink><div onClick={handleProjects}>Projects</div></NavLink>
              <NavLink><div onClick={handleContacts}>Contacts</div></NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <Box p={8}>
        <Home />
        <About ref={about}/>
        <Skills />
      </Box> */}
      
    </>
  );
}