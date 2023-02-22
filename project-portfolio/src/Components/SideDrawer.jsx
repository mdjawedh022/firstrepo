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
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GrProjects, GrContact } from "react-icons/gr";
import img from "../Data/logoMj.png";
import { IoIosContact } from "react-icons/io";
import { MdLocalLibrary } from "react-icons/md";

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} bg={'blur'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              src={img}
              
              w={{ base: "15%", md: "7%", lg: "5%" }}
              borderRadius={"40px"}
            />
          </DrawerHeader>
          <hr />

          <DrawerBody p={'20px 20px'}>
            <Link smooth={true} duration={1000} to="home">
              {" "}
              <Box
                onClick={onClose}
                fontWeight={"550"}
                fontSize={"22px"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
              >
                {" "}
                <AiOutlineHome /> Home{" "}
              </Box>
            </Link>
            <Link smooth={true} duration={1000} to="about">
              {" "}
              <Box
                onClick={onClose}
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
              >
                <IoIosContact /> About{" "}
              </Box>
            </Link>
            <Link smooth={true} duration={1000} to="skills">
              {" "}
              <Box
                onClick={onClose}
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
              >
                <MdLocalLibrary />
                Skills{" "}
              </Box>
            </Link>
            <Link smooth={true} duration={1000} to="project">
              <Box
                fontSize={"22px"}
                onClick={onClose}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
              >
                <GrProjects />
                Projects
              </Box>
            </Link>
            <Link smooth={true} duration={1000} to="contact">
              {" "}
              <Box
                onClick={onClose}
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
              >
                <GrContact /> Contact{" "}
              </Box>
            </Link>
            <Link to="">
              <Box
                fontSize={"22px"}
                fontWeight={"550"}
                display={"flex"}
                alignItems="center"
                gap={"10px"}
              >
                <AiOutlineArrowDown /> Resume
              </Box>{" "}
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SideDrawer;
