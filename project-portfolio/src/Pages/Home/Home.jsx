import { Box, Button, Text, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import img from "../../Data/jawed_pic.jpg";

const Home = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("blue.800", "gray.700")}
        display={{ base: "grid", md: "grid", lg: "grid" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        mt={{ base: "16.5%", md: "9.5%", lg: "5.8%" }}
        alignItems={"center"}
      >
        <Box w={{ base: "100%", md: "100%", lg: "100%" }}>
          <Text
            color={useColorModeValue("white")}
            fontSize={{ base: "30px", md: "40px", lg: "40px" }}
          >
            Hi, My Name is
          </Text>
          <Text
            color={useColorModeValue("white")}
            fontSize={{ base: "35px", md: "45px", lg: "50px" }}
          >
            Md Jawed Hussain
          </Text>
          <Text
            color={useColorModeValue("white")}
            fontSize={{ base: "14px", md: "20px", lg: "20px" }}
          >
            I enjoy coding and devloping user centeric web aplication!
          </Text>
          <Text
            color={useColorModeValue("white")}
            fontSize={{ base: "15px", md: "20px", lg: "20px" }}
          >
            {" "}
            I am{" "}
            <Typewriter
              words={[" Full Stack Developer", " Software Engineer"]}
              loop
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Text>
          <Button m={"10px"}>Resume</Button>
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "100%" }}>
          <Image
            src={img}
            w={{ base: "90%", md: "70%", lg: "50%" }}
            padding={"20px"}
            borderRadius={"50%"}
            m={{ base: "auto", md: "auto", lg: "60px auto" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Home;
