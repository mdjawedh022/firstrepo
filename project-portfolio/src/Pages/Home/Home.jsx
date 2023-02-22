import { Box, Button, Text, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./home.css";
import {DownloadIcon} from "@chakra-ui/icons"
import img from "../../Data/jawed_pic.jpg";

const Home = () => {
  const goto = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Box
      name='home'
      pt={{base:'100px',md:"70px",lg:"110px"}}
        bg={useColorModeValue("blue.800", "gray.700")}
        display={{ base: "grid", md: "grid", lg: "grid" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        // mt={{ base: "16.5%", md: "9.5%", lg: "5.8%" }}
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
          <Button color={useColorModeValue("","black")} bg={'white'}m={"10px"} 
            onClick={() =>
              goto(
                "https://drive.google.com/file/d/1m5GgisAbX7FWCvIzTYzc-8tLL-hUtOYO/view?usp=sharing"
              )
            }>Resume <DownloadIcon _activeLink={"https://drive.google.com/drive/folders/1hScM1EAL42h5E1xwcgww2lXbZ9vklou9&export=download"}/></Button>
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "100%" }}>
         <Box borderWidth={"5px"}
          w={{ base: "90%", md: "70%", lg: "40%" }}
          borderRadius={"50%"}
          m={{ base: "30px auto", md: "30px auto", lg: "95px auto" }}   >
         <Image
            src={img}
            w={'100%'}
           cursor={'pointer'}
            borderRadius={"50%"}
                 />
         </Box>

  
        </Box>
      </Box>
    </>
  );
};

export default Home;
