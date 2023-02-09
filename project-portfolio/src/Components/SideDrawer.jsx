/* eslint-disable react/jsx-no-undef */
import {
    Drawer,
    Button,
    Box,
    Image,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import {HamburgerIcon} from "@chakra-ui/icons"
  import img from '../Data/logoMj.png'

function SideDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button  onClick={onOpen}>
        <HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
        
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
            <Image src={img} w={{base:"15%",md:"7%",lg:'5%'}}
        borderRadius={'40px'}
        />
            </DrawerHeader>
            <hr />
  
            <DrawerBody>
              <Box>Home</Box>
              <Box>About</Box>
              <Box>Skills</Box>
              <Box>Projects</Box>
              <Box>Contact</Box>
              <Box>Resume</Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default SideDrawer;