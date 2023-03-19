import {
  Box,
  Text,
  Button,
  Image,
  Center,
} from "@chakra-ui/react";
import logo from "./Projectlogo/bellavita.png";
import Logo from "./Projectlogo/kindmeal.png";
import image from "./Projectlogo/Lyst.png";
import images from "./Projectlogo/healthcart.png";
import { AiOutlineGithub, AiOutlineHtml5 } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import React from "react";
import { GrHeroku } from "react-icons/gr";
import { TbBrandJavascript, TbApi, TbBrandCss3 } from "react-icons/tb";
import { SiChakraui, SiRedux, SiReact } from "react-icons/si";
import { FaGit } from "react-icons/fa";

const Project = () => {
  const handleclick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Box pt={{ base: "70px", md: "70px", lg: "70px" }} name="project" fontFamily={"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}>
        <Text
          fontWeight={"500"}

          fontSize={{ base: "30px", md: "30px", lg: "50px" }}
        >
        Latest Project
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
          gap={"20px"}
        >
          <Box
            bgImage={"linear-gradient(300deg,#8f34c0,#5968f2,#541ec9,#8f34c0)"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image borderRadius={"10px"} src={images} alt="pro1" />
            <Text
              color={"white"}
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              HealthKart
            </Text>
            <Text color={"white"} mb={"5px"}>
              An E-commerce website that brings to users the latest product like
              Protein, Gainer, and Creating product.
            </Text>

            <hr />
            <Text
              color={"white"}
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Tech Stack
            </Text>
            <Center>
              <Box
                display={"flex"}
                alignItems={"center"}
                mt={"5px"}
                gap={"8px"}
                mb={"5px"}
                fontSize={"27px"}
                color={"white"}
              >
                <SiReact /> || <SiRedux /> || <SiChakraui /> ||
                <GrHeroku />
                || <FaGit />
              </Box>
            </Center>
            <hr />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              mt={"10px"}
            >
              <Button
                gap="5px"
                onClick={() =>
                  handleclick(
                    "https://github.com/rahulbnc463/hunky-advertisement-4799"
                  )
                }
              >
                Repo <AiOutlineGithub />
              </Button>
              <Button
                gap="5px"
                onClick={() =>
                  handleclick("https://hunky-advertisement-4799.netlify.app/")
                }
              >
                Live <BsBoxArrowUpRight />
              </Button>
            </Box>
          </Box>
          {/* ------------------------------------------------------ */}
          <Box
            bgImage={"linear-gradient(300deg,#8f34c0,#5968f2,#541ec9,#8f34c0)"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image borderRadius={"10px"} src={logo} alt="pro1" />
            <Text
              color="white"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Bella vita organic
            </Text>
            <Text color="white">
              An E-commerce website that brings to users the latest product like
              body care, Skin care, Sensitive skin, and Summer Essentials
              product.
            </Text>
            <hr />
            <Text
              color="white"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Tech Stack
            </Text>
            <Center>
              <Box
                mt={"5px"}
                color="white"
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                mb={"5px"}
                fontSize={"30px"}
              >
                <AiOutlineHtml5 />
                || <TbBrandCss3 /> || <TbBrandJavascript /> || <TbApi /> ||{" "}
                <FaGit />
              </Box>
            </Center>
            <hr />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              mt={"10px"}
            >
              <Button
                gap="5px"
                onClick={() =>
                  handleclick("https://github.com/ranjankumar9/reach-wren-1563")
                }
              >
                Repo <AiOutlineGithub />
              </Button>
              <Button
                gap="5px"
                onClick={() =>
                  handleclick(
                    "https://bellavitaorganic1.netlify.app/index.html"
                  )
                }
              >
                Live <BsBoxArrowUpRight />
              </Button>
            </Box>
          </Box>
          {/* ------------------- */}
          <Box
            bgImage={"linear-gradient(300deg,#8f34c0,#5968f2,#541ec9,#8f34c0)"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image
              borderRadius={"10px"}
              h={"205px"}
              w={"100%"}
              src={Logo}
              alt="pro1"
            />
            <Text
              color="white"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Kindmeal
            </Text>
            <Text color="white">
              Malaysia's No.1 meat-free lifestyle platform. This website
              promotes a compassionate, meat-free dining experience. Some food
              may contain eggs and dairy products.
            </Text>
            <hr />
            <Text
              color="white"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Tech Stack
            </Text>
            <Center>
              <Box
                color="white"
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                mb={"5px"}
                fontSize={"30px"}
              >
                <AiOutlineHtml5 />
                || <TbBrandCss3 /> || <TbBrandJavascript /> || <TbApi /> ||{" "}
                <FaGit />
              </Box>
            </Center>
            <hr />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              mt={"10px"}
            >
              <Button
                gap="5px"
                onClick={() =>
                  handleclick("https://github.com/starkex/arrogant-beef-5673")
                }
              >
                Repo <AiOutlineGithub />
              </Button>
              <Button
                gap="5px"
                onClick={() =>
                  handleclick(
                    "https://sweet-sunshine-5a208c.netlify.app/index.html"
                  )
                }
              >
                Live <BsBoxArrowUpRight />
              </Button>
            </Box>
          </Box>
          {/* ------------------- */}
          <Box
            bgImage={"linear-gradient(300deg,#8f34c0,#5968f2,#541ec9,#8f34c0)"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            p={"10px"}
            borderRadius={"10px"}
          >
            <Image
              borderRadius={"10px"}
              src={image}
              alt="pro1"
              h={"205px"}
              w={"100%"}
            />
            <Text
              color="white"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Lyst
            </Text>
            <Text color="white">
              An E-commerce website that brings to users the latest product like
              Cloth, Shoes, and Summer Essentials product.
            </Text>
            <br />

            <hr />
            <Text
              color="white"
              fontSize={{ base: "20px", md: "20px", lg: "20px" }}
            >
              Tech Stack
            </Text>
            <Center>
              <Box
                mt={"5px"}
                color="white"
                display={"flex"}
                alignItems={"center"}
                gap={"5px"}
                mb={"10px"}
                fontSize={"27px"}
              >
                <SiReact /> || <SiChakraui /> ||
                <GrHeroku />
                || <FaGit />
              </Box>
            </Center>
            <hr />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
              mt={"10px"}
            >
              <Button
                gap="5px"
                onClick={() =>
                  handleclick(
                    "https://github.com/erpushpendrasingh/seemly-porter-7181"
                  )
                }
              >
                Repo <AiOutlineGithub />
              </Button>
              <Button
                gap="5px"
                onClick={() =>
                  handleclick("https://seemly-porter-7181a.netlify.app/")
                }
              >
                Live <BsBoxArrowUpRight />
              </Button>
            </Box>
          </Box>
        </Box>
        {/* <Button>more Projects -></Button> */}
      </Box>
    </>
  );
};

export default Project;
