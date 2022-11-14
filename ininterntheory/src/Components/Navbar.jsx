import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  MenuDivider,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
const [token,settoken] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
      settoken(localStorage.getItem("user-info"))
    },[])
    function handleChange1(){
        navigate("/signin")
    }
   function handleclick(){
    navigate("/signin")
   }
   function handleclick1(){
    navigate("/signup")
   }

   function handlehome(){
    navigate("/")
   }
   function logout(){
    localStorage.removeItem("user-info")
    navigate("/signin")
   }
  return (
    <div className="j_nav">
      <div
        style={{
          display: "flex",
          gap: "30px",
          width: "10%",
          
        }}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          ></MenuButton>
          <MenuList width={350} h={950} fontSize={20} marginLeft={-3}>
            <MenuGroup>
              <MenuItem onClick={handlehome} >
                <i className="fa-solid fa-house-chimney"></i>Home
              </MenuItem>
              <MenuItem>
                <i className="fa-sharp fa-solid fa-list-ul"></i>Internships
              </MenuItem>
              <MenuItem>
              <i className="fa-solid fa-user-plus"></i>Jobs
              </MenuItem>
              <MenuItem>
              <i className="fa-solid fa-square-plus"></i> Post Intership
              </MenuItem>
              <MenuItem>
                {" "}
                <i className="fa-solid fa-book-bookmark"></i>Courses
              </MenuItem>
              <MenuItem>
                <i className="fa-solid fa-phone"></i>Contact Us
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <MenuItem onClick={handleclick1}>
              <i className="fa-solid fa-bars-staggered"></i>Register
              </MenuItem>
              <MenuItem onClick={handleclick}>
                <i className="fa-solid fa-door-closed"></i>Login
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <div><Link to="/">
          <img
            style={{}}
            src="https://assets.interntheory.com/creative/logo.png"
            alt=""
          />
        </Link></div>
      </div>
      <div
        style={{
          display:"flex",
          gap:"20px",
         marginLeft:"80%",
        //   border: "1px solid red",
        }}
      >
        <div>
          {" "}
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div style={{cursor:"pointer"}}>
          {token ? <Avatar src='https://bit.ly/broken-link' onClick={logout}/> : <Button colorScheme="red" onClick={handleChange1}>Sign in</Button>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
