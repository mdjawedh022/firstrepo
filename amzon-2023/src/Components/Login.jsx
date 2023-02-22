import React from "react";
import {
  Box,
  Image,
  FormLabel,
  Input,
  Button,
  Heading,
  FormControl,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import Footer1 from "./Footer1";

const Login = () => {
const navigate=useNavigate()

const handlesignup=()=>{
  navigate('./signup')
}

  return (
    <>
      <Box>
        <Box
          cursor={"pointer"}
          m="30px auto"
          w={{ base: "20%", md: "15%", lg: "9%" }}
        >
          <Link to="/">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" />
          </Link>
        </Box>
        <Box
          w={{ base: "75%", md: "40%", lg: "25%" }}
          m={"30px auto"}
          borderWidth={"1px"}
          padding={"15px"}
          borderRadius="5px"
        >
          <FormControl>
            <Heading fontWeight={"400"} textAlign="left" fontSize={"30px"}>
              Sign in
            </Heading>
            <FormLabel mt="10px">Email</FormLabel>
            <Input
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              placeholder=""
            />
            <FormLabel mt="10px">Password</FormLabel>
            <Input
              h={"30px"}
              borderWidth={"2px"}
              borderRadius={"3px"}
              fontSize={"13px"}
              placeholder=""
            />

            <Button
              mt="20px"
              border={"1px black solid"}
              h={"30px"}
              borderRadius={"3px"}
              w={{ base: "100%", md: "100%", lg: "100%" }}
              bg={"orange.300"}
            >
              Contiune
            </Button>
          </FormControl>
          <Text
            mt="15px"
            fontSize={{ base: "12px", md: "12px", lg: "11px" }}
            fontWeight="500"
          >
            By continuing, you agree to Amazon's{" "}
            <Link style={{ color: "skyblue" }}> Conditions of use</Link> and{" "}
            <Link style={{ color: "skyblue" }}> Privacy Notice.</Link>
          </Text>
          <br />
          <Link
            style={{ color: "skyblue", fontWeight: "500", fontSize: "11px" }}
          >
            Need help?
          </Link>
        </Box>
     
          <Text
            fontSize={{ base: "12px", md: "12px", lg: "11px" }}
            fontWeight="500"
            textAlign={"center"}
          >
            New to Amazon
          </Text>
        
        <Center>
          <Button
          onClick={handlesignup}
            m="15px 0 20px 0"
            border={"1px solid black"}
            w={{ base: "73%", md: "40%", lg: "25%" }}
            borderRadius="3px"
            fontSize={"12px"}
            h="30px"
          >
            Create your Amazon Account
          </Button>
        </Center>
      </Box>

      <Footer1 />
    </>
  );
};

export default Login;
