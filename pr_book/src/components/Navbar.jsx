import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex
        align={"center"}
        gap="20px"
        borderWidth={"1px"}
        p={"12px 0"}
        fontWeight={500}
        position={"fixed"}
        w={"100%"}
        zIndex={3}
        top={0}
        bgColor={'white'}
      
      >
        <Link to="/">E-commarce</Link>
        <Link to="/mainPage">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="edit">Edit</Link>{" "}
      </Flex>
    </>
  );
};

export default Navbar;
