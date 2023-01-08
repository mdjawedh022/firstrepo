import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

const Skill = () => {
  return (
    <div style={{ width: "70%", margin: "50px auto" }}>
      <Box textAlign={"center"}>
        <Heading>Skill. Reskill. Upskill.</Heading>
        <Text fontWeight={"600"}>
          No matter the stage of your career, if growth in India’s tech industry
          is your desired outcome, we got you covered!
        </Text>
      </Box>

      <Flex py={6} gap={10} width={"100%"} marginLeft={"40px"}>
        <Box
          maxW={"450px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          // boxShadow={"2xl"}
          boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box h={"120px"} w={"full"} objectFit={"cover"} bg={"#6E71CC"}></Box>

          <Flex justify={"center"} mt={-12}>
            <Avatar
              width={"50%"}
              height
              // size={'xl'}
              src={
                "https://masai-website-images.s3.ap-south-1.amazonaws.com/Downloader_1_c382f15ecf.png "
              }
              alt={"Author"}
              css={{
                border: "5px solid white",
              }}
            />
          </Flex>
          <Box>
            <Box textAlign={"center"}>
              <Heading>Masai 0NE</Heading>
              <Text>
                {" < "}linearGradient. Practice. Grow {">"}
              </Text>
            </Box>
            <Center gap={1} mt={2}>
              <Text
                color={"blue.400"}
                bg={"#F2F6FF"}
                padding={"0 10px"}
                fontWeight={"600"}
                borderRadius={"20px"}
                fontSize={"12px"}
              >
                12TH PASS
              </Text>
              <Text
                color={"blue.400"}
                fontWeight={"600"}
                padding={"0 10px"}
                fontSize={"12px"}
                bg={"#F2F6FF"}
                borderRadius={"20px"}
              >
                FINAL YEAR STUDENTS OR GRADUATES
              </Text>
            </Center>
            <Box ml={5}>
              <Flex gap={2} alignItems={"center"} mt={3}>
                {" "}
                <i class="fa-solid fa-graduation-cap"></i>{" "}
                <Text fontWeight={"600"}>
                  Data Analytics | Software Development
                </Text>
              </Flex>
              <Flex gap={2} alignItems={"center"} mt={3}>
                <i class="fa-solid fa-bag-shopping"></i>
                <Text fontWeight={"600"}>
                  No Prior Technical Knowledge Needed
                </Text>
              </Flex>
              <Flex gap={2} alignItems={"center"} mt={3}>
                {" "}
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <Text fontWeight={"600"}>Pay After Placement of </Text>
                <span style={{ color: "Blue", fontWeight: "600" }}>
                  {" "}
                  5 LPA or Above
                </span>
              </Flex>
            </Box>
          </Box>
          <Box
            width={"100%"}
            bg={"red"}
            textAlign={"center"}
            color={"white"}
            padding={"15px 0"}
            mt={"25px"}
            fontWeight={"600"}
          >
            VIEW COURSES
          </Box>
        </Box>
        {/* ------------------------------------- */}
        <Box
          maxW={"450px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box h={"120px"} w={"full"} objectFit={"cover"} bg={"#6FCD9E"}></Box>

          <Flex justify={"center"} mt={-12}>
            <Avatar
              width={"50%"}
              height
              src={
                "https://masai-website-images.s3.ap-south-1.amazonaws.com/Downloader_45493fc392.png"
              }
              alt={"Author"}
              css={{
                border: "5px solid white",
              }}
            />
          </Flex>
          <Box>
            <Box textAlign={"center"}>
              <Heading>MasaiX.</Heading>
              <Text>
              Fast Track Your Aspiration
              </Text>
            </Box>
            <Center gap={1} mt={2}>
             
              <Text
                color={"blue.400"}
                fontWeight={"600"}
                padding={"0 10px"}
                fontSize={"12px"}
                bg={"#F2F6FF"}
                borderRadius={"20px"}
              >
               FOR WORKING PROFESSIONALS
              </Text>
            </Center>
            <Box ml={5}>
              <Flex gap={2} alignItems={"center"} mt={3}>
                {" "}
                <i class="fa-solid fa-graduation-cap"></i>{" "}
                <Text fontWeight={"600"}>
                  Data Analytics | Software Development
                </Text>
              </Flex>
            
              <Flex gap={2} alignItems={"center"} mt={3}>
                {" "}
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <Text fontWeight={"600"}>Level 1: Pay After You Earn</Text>
                <span style={{ color: "Blue", fontWeight: "600" }}>
                  {" "}
                  5 LPA or Above
                </span>
              </Flex>
              <Flex gap={2} alignItems={"center"} mt={3}>
          
                <Text ml={4} fontWeight={"600"}>Level 1: Pay After You Earn</Text>
                <span style={{ color: "Blue", fontWeight: "600" }}>
                  {" "}
                  10 LPA or Above
                </span>
              </Flex>
            </Box>
          </Box>
          <Box
            width={"100%"}
            bg={"red"}
            textAlign={"center"}
            color={"white"}
            padding={"15px 0"}
            mt={"25px"}
            fontWeight={"600"}
          >
            VIEW COURSES
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Skill;
