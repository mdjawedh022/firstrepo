import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import "./sideDrawer.css";
import React from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <RxHamburgerMenu size="30" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <img

              src="https://i.pinimg.com/474x/4d/35/c1/4d35c148dc6c150ee912b90f4c25e953.jpg"
              alt="ranjan"
              style={{width:"20%",marginBottom:'0px'}}
            />
            <hr />
          </DrawerHeader>

          <DrawerBody>
            <div className="body-drawer-section" >
              <Link to="home" smooth={true} duration={1000} onClick={onClose}>
                Home
              </Link>
            </div>
            <div className="body-drawer-section">
              <Link to="about" smooth={true} duration={1000} onClick={onClose}>
                About
              </Link>
            </div>
            <div className="body-drawer-section">
              <Link to="skills" smooth={true} duration={1000} onClick={onClose}>
                Skills
              </Link>
            </div>
            <div className="body-drawer-section">
              <Link to="project" smooth={true} duration={1000} onClick={onClose}>
                Project
              </Link>
            </div>
            <div className="body-drawer-section">
              <Link to="contact" smooth={true} duration={1000} onClick={onClose}>
                Contact
              </Link>
            </div>
            <div className="body-drawer-section">
              <Link>Resume</Link>
            </div>
            {/* <p>Home</p>
              <p>About</p>
              <p>Skills</p>
              <p>Project</p>
              <p>Contact</p>
              <p>Resume</p> */}
          </DrawerBody>

          {/* <DrawerFooter>
              
            </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SideDrawer;
