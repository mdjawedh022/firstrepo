import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  Container,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SliderMain from "./Components/SliderMain";
import BottomSection from "./Components/BottomSection";

const Home = () => {
  return (
    <>
      <Box mt={"7%"}>
        <Box bg={"#f5f5f5"} p="4px " textAlign={"center"}>
          <Text>Save Up to 40%</Text>
          <Link
            to="/"
            style={{ fontSize: "11px", textDecoration: "underline" }}
          >
            Shop All New Markdowns
          </Link>
        </Box>
        {/* --------------------------- */}
        <Box w={{ base: "90%", md: "90%", lg: "90%" }} m={"auto"}>
          <Image
            w={"100%"}
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/4701433e-6167-49bb-86c6-8c1bd51554e0/nike-just-do-it.jpg"
            alt=""
          />{" "}
        </Box>

        {/* ----------------------- */}
        <Box
          textAlign={{base:"left",md:'left',lg:"center"}}
          m={{ base: "30px auto", md: "40px auto", lg: "70px auto" }}
          w={{ base: "90%", md: "90%", lg: "70% " }}
        >
          <Text fontSize={{ base: "", md: "", lg: "17px" }}>
            New Nike Leggings
          </Text>
          <Heading
            fontSize={{ base: "20px", md: "30px", lg: "60px" }}
            fontWeight={"900"}
            fontFamily={"sans-serif"}
          >
            MEET ZENVY
          </Heading>
          <br />
          <Text textAlign={"justify"}>
            Gentle support meets cloud like comfort in the NEW Nike Zenvy
            leggings .one try-on is all it take to fall in love with our softest
            -yet durable- leggings yet. What are you waiting for? Time to
            discover softness you can live in
          </Text>
          <br />
          {/* <Box gap={'10px'} display={'flex'}> */}
          <Button
            borderRadius={"20px"}
            bg={"black"}
            mr={"10px"}
            colorScheme={"white"}
          >
            Shop
          </Button>
          <Button borderRadius={"20px"} bg={"black"} colorScheme={"white"}>
            Learn More
          </Button>
          {/* </Box> */}
        </Box>

        {/* ------------------------------- */}
        <Box m={"auto"} w={{ base: "90%", md: "90%", lg: "88%" }}>
          <Text fontSize={{ base: "20px", md: "20px", lg: "25px" }} mb={"10px"}>
            Featured
          </Text>
          <Image
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/83deea9e-36a4-499c-b3d2-b34d164c3d1e/nike-just-do-it.jpg"
            alt="j"
          />
        </Box>
        {/* ----------------------------------- */}

        <Box
         textAlign={{base:"left",md:'left',lg:"center"}}
          m={{ base: "30px auto", md: "40px auto", lg: "70px auto" }}
          w={{ base: "90%", md: "80%", lg: "70% " }}
        >
          <Text fontSize={{ base: "", md: "", lg: "17px" }}>
            Nike Alphafly 2
          </Text>
          <Heading
            fontSize={{ base: "20px", md: "30px", lg: "60px" }}
            fontWeight={"900"}
          >
            RACE AHEAD
          </Heading>
          <br />
          <Text>
            The lightweight carbon-fiber plate combined with a ZoomX foam
            midsole is designed for speed.
          </Text>
          <br />
          {/* <Box gap={'10px'} display={'flex'}> */}
          <Button
            borderRadius={"20px"}
            bg={"black"}
            mr={"10px"}
            colorScheme={"white"}
          >
            Shop
          </Button>

          {/* </Box> */}
        </Box>
        <Box
          m={{ base: "", md: "", lg: "70px auto" }}
          w={{ base: "", md: "", lg: "100% " }}
        >
          <SliderMain />
        </Box>
        {/* ----------------------- */}
        <Box w={{ base: "90%", md: "90%", lg: "90%" }} m={"20px auto 0 auto"}>
          <Image
            w={"100%"}
            src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1943,c_limit/9926a99c-4e98-412a-92d7-052dcbbcced4/nike-just-do-it.jpg"
            alt=""
          />{" "}
        </Box>

        {/* --------------------------- */}
        <Box
         textAlign={{base:"left",md:'left',lg:"center"}}
          m={{ base: "auto", md: "auto", lg: "70px auto" }}
          w={{ base: "90%", md: "90%", lg: "70% " }}
        >
          <Heading
            fontSize={{ base: "", md: "30px", lg: "60px" }}
            fontWeight={"900"}
            mt={'15px'}
            fontFamily={"sans-serif"}
          >
            ARTIST SERIES
          </Heading>
          <br />
          <Text>
            Combining innovating art with familiar silhouettes, we're creating a
            canvas for
          </Text>
          <Text>up-and-coming artists from the Black community.</Text>
          <br />
          {/* <Box gap={'10px'} display={'flex'}> */}
          <Button
            borderRadius={"20px"}
            bg={"black"}
            mr={"10px"}
            colorScheme={"white"}
          >
            Shop
          </Button>
        </Box>
        {/* ------------------------the essentials-------------------- */}

        <Box w={{ base: "90%", md: "90%", lg: "90%" }} m={"auto"}>
          <Text
            fontSize={{ base: "20px", md: "20px", lg: "25px" }}
            mb={"10px"}
            textAlign={"left"}
          >
            The Essentials
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap="10px"
          >
            <Box
              bgImage={
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png"
              }
              w={"full"}
              h={"auto"}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            >
              <Button m={"95% 0% 8% 10%"} p={"5px 27px"} borderRadius={"50px"}>
                Men's
              </Button>
            </Box>
            <Box
              bgImage={
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png"
              }
              w={"full"}
              h={"auto"}
              display={{ base: "block", md: "none", lg: "block" }}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            >
              <Button m={"95% 0% 8% 10%"} p={"5px 27px"} borderRadius={"50px"}>
                Women's
              </Button>
            </Box>
            <Box
              bgImage={
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png"
              }
              w={"full"}
              h={"auto"}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
            >
              <Button m={"95% 0% 8% 10%"} p={"5px 27px"} borderRadius={"50px"}>
                Kid's
              </Button>
            </Box>
          </Box>
        </Box>

        {/* --------------------------------- */}
        <Box>
       <BottomSection/>
       </Box>
      </Box>
    </>
  );
};

export default Home;
