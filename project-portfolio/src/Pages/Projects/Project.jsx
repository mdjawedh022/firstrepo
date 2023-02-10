import {
  Box,
  Text,
  Button,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";
import img from "../../images/1.png";
import img1 from "../../images/2.png";
import "./project.css";

const Project = () => {
  return (
    <>
      <Box>
        <Text fontSize={{ base: "20px", md: "30px", lg: "50px" }}>
          Projects
        </Text>
        <Box
        
          w={{ base: "90%", md: "90%", lg: "70%" }}
          m={"20px auto"}
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={'20px'}
        >
          <Box
          bg={useColorModeValue("blue.800","gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image borderRadius={"10px"} src={img} alt="pro1" />
            <Text color={useColorModeValue("white","")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}>Tanishq</Text>
            <Text color={useColorModeValue("white","")}>
              Tanishq has emerged as India's fastest growing jewellery brand and
              is a name which signifies superior craftsmanship, exclusive
              designs and superlative product quality.{" "}
            </Text>
            <hr />
            <Text
            color={useColorModeValue("white","")} fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
              Tech Stack
            </Text>
            <Center>
              <Box display={"flex"} alignItems={"center"} gap={"5px"} mb={'10px'}>
                <Button >HTML</Button>
                <Button>CSS</Button> <Button>Javascript</Button>{" "}
              </Box> 
            </Center>
            <hr />
              <Box display={"flex"} alignItems={"center"} justifyContent={'space-around'} mt={'10px'}>
                <Button>Repo</Button>
                <Button>Live</Button>
              </Box>
          </Box>
{/* ------------------------------------------------------ */}
          <Box
          bg={useColorModeValue("blue.800","gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image borderRadius={"10px"} src={img1} alt="pro1" />
            <Text color={useColorModeValue("white","")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}>J.Crew</Text>
            <Text color={useColorModeValue("white","")}>
            In this project we have tried to manipulate dom elements, styling
            using css and tried to make a dynamic and responsive website. we
            were able to clone more or less the whole website with same looking
            and features.{" "}
            </Text>
            <hr />
            <Text
            color={useColorModeValue("white","")} fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
              Tech Stack
            </Text>
            <Center>
              <Box display={"flex"} alignItems={"center"} gap={"5px"} mb={'10px'}>
                <Button >HTML</Button>
                <Button>CSS</Button> <Button>Javascript</Button>{" "}
              </Box> 
            </Center>
            <hr />
              <Box display={"flex"} alignItems={"center"} justifyContent={'space-around'} mt={'10px'}>
                <Button>Repo</Button>
                <Button>Live</Button>
              </Box>
          </Box>
{/* ------------------- */}
          <Box
          bg={useColorModeValue("blue.800","gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image borderRadius={"10px"} src={img} alt="pro1" />
            <Text color={useColorModeValue("white","")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}>Tanishq</Text>
            <Text color={useColorModeValue("white","")}>
              Tanishq has emerged as India's fastest growing jewellery brand and
              is a name which signifies superior craftsmanship, exclusive
              designs and superlative product quality.{" "}
            </Text>
            <hr />
            <Text
            color={useColorModeValue("white","")} fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
              Tech Stack
            </Text>
            <Center>
              <Box display={"flex"} alignItems={"center"} gap={"5px"} mb={'10px'}>
                <Button >HTML</Button>
                <Button>CSS</Button> <Button>Javascript</Button>{" "}
              </Box> 
            </Center>
            <hr />
              <Box display={"flex"} alignItems={"center"} justifyContent={'space-around'} mt={'10px'}>
                <Button>Repo</Button>
                <Button>Live</Button>
              </Box>
          </Box>
{/* ------------------- */}
        </Box>
      </Box>
    </>
  );
};

export default Project;
