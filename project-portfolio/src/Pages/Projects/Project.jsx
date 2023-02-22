import {
  Box,
  Text,
  Button,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";
import {AiOutlineGithub,AiOutlineHtml5} from "react-icons/ai"
import {BsBoxArrowUpRight} from "react-icons/bs"
import React from "react";
// import {DiNodejs} from "react-icons/di"
import {TbBrandJavascript} from "react-icons/tb"
import {SiChakraui, SiRedux} from "react-icons/si"
import {FaCss3Alt, FaNodeJs, FaReact} from "react-icons/fa"
import img from "../../images/1.png";
import img1 from "../../images/2.png";
import img3 from "../../images/wishkart-photo.png"
import "./project.css";

const Project = () => {

  const handleclick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Box
      pt={{base:'70px',md:"70px",lg:"70px"}}
      name="project">
        <Text fontSize={{ base: "30px", md: "30px", lg: "50px" }}>
        My Creative Project Section
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
          bg={useColorModeValue("blue.800","blue.800")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image borderRadius={"10px"} src={img} alt="pro1" />
            <Text color={useColorModeValue("white","")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}>Tanishq</Text>
            <Text color={useColorModeValue("white","")} mb={'5px'}>
              Tanishq has emerged as India's fastest growing jewellery brand and
              is a name which signifies superior craftsmanship, exclusive
              designs and superlative product quality.{" "}
            </Text>
            <br />
            <hr />
            <Text
            color={useColorModeValue("white","")} fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
              Tech Stack
            </Text>
            <Center>
              <Box display={"flex"} alignItems={"center"} gap={"5px"} mb={'5px'} fontSize={'30px'}>
                <AiOutlineHtml5 color="white"/>
               <FaCss3Alt color="white"/><TbBrandJavascript color="white"/>
              </Box> 
            </Center>
            <hr />
              <Box display={"flex"} alignItems={"center"} justifyContent={'space-around'} mt={'10px'}>
                <Button gap='5px'  onClick={() =>
                handleclick(
                  "https://github.com/mdjawedh022/mdjawedh022/tree/main/tanishq-main"
                )
              }>Repo <AiOutlineGithub/></Button>
                <Button  gap="5px"  onClick={() =>
                handleclick("https://reliable-madeleine-0f926f.netlify.app")
              }>Live <BsBoxArrowUpRight/></Button>
              </Box>
          </Box>
{/* ------------------------------------------------------ */}
          <Box
          bg={useColorModeValue("blue.800","blue.800")}
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
              <Box display={"flex"}  alignItems={"center"} gap={"5px"} mb={'5px'} fontSize={'30px'}>
                <FaReact color="white"/>
                <FaCss3Alt color="white"/> <SiChakraui color="white"/>{" "}
              </Box> 
            </Center>
            <hr />
              <Box display={"flex"} alignItems={"center"} justifyContent={'space-around'} mt={'10px'}>
                <Button gap='5px' onClick={() =>
                handleclick("https://github.com/mdjawedh022/-hellish-cough-3444")
              }>Repo <AiOutlineGithub/></Button>
                <Button gap="5px"  onClick={() =>
                handleclick("https://playful-melomakarona-1f7b4f.netlify.app")
              }>Live <BsBoxArrowUpRight/></Button>
              </Box>
          </Box>
{/* ------------------- */}
          <Box
          bg={useColorModeValue("blue.800","blue.800")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image borderRadius={"10px"} h={"205px"} w={'100%'} src={img3} alt="pro1" />
            <Text color={useColorModeValue("white","")}
            fontSize={{ base: "20px", md: "20px", lg: "20px" }}>WishKart</Text>
            <Text color={useColorModeValue("white","")}>
            WishKart (colne of Meesho)is an E-commerce website from where users can buy lifestyle products at a good price.
            This is a team project where we cloned cart Page,checkout page and payment page.
            </Text>
            <hr />
            <Text
            color={useColorModeValue("white","")} fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
              Tech Stack
            </Text>
            <Center>
              <Box display={"flex"} alignItems={"center"} gap={"5px"} mb={'5px'} fontSize={'30px'}>
                <FaReact color="white"/>
                <SiRedux color="white"/>
                <FaCss3Alt color="white"/> <SiChakraui color="white"/>{" "}
                <FaNodeJs color="white"/>
                {" "}
              </Box> 
            </Center>
            <hr />
              <Box display={"flex"} alignItems={"center"} justifyContent={'space-around'} mt={'10px'}>
                <Button gap='5px' onClick={() =>
                handleclick(
                  "https://github.com/Rajendra3049/Wishkart"
                )
              }>Repo <AiOutlineGithub/></Button>
                <Button gap="5px" onClick={() =>
                handleclick(
                  "https://wish-kart.vercel.app/"
                )
              }>Live <BsBoxArrowUpRight/></Button>
              </Box>
          </Box>
{/* ------------------- */}
<Box
          bg={useColorModeValue("blue.800","blue.800")}
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
              <Box display={"flex"} alignItems={"center"} gap={"5px"} mb={'10px'} fontSize={'30px'}>
              <AiOutlineHtml5 color="white"/>
               <FaCss3Alt color="white"/><TbBrandJavascript color="white"/>
              </Box> 
            </Center>
            <hr />
              <Box display={"flex"} alignItems={"center"} justifyContent={'space-around'} mt={'10px'}>
                <Button gap='5px'>Repo <AiOutlineGithub/></Button>
                <Button gap="5px">Live <BsBoxArrowUpRight/></Button>
              </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Project;
