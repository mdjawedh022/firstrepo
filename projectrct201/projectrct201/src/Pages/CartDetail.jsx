import React from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Box,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
function CartDetail() {
  return (
    <Center p={"15px 30px"}>
      <Stack
        borderRadius="lg"
        w={{ sm: "100%", md: "540px", lg: "60%" }}
        height={{ sm: "476px", md: "20rem", lg: "600px" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white")}
      >
        <Flex flex={1} padding={4} height={"500px"}>
          <Box></Box>
          <Box borderWidth="1px" borderRadius="5px" padding={"0 15px"}>
            <Image
              borderWidth="1px"
              objectFit="cover"
              boxSize="100%"
              src={
                "https://images.meesho.com/images/products/172821890/ijrqy_512.webp"
              }
            />
            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"sm"}
                bg={"white"}
                borderWidth={"1px"}
                _focus={{
                  bg: "white.200",
                }}
                alignItems={"center"}
              >
                <i class="fa-solid fa-cart-shopping"></i>
                <Text padding={"10px"}> Add to Cart</Text>
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"sm"}
                bg={"pink.400"}
                color={"white"}
                _hover={{
                  bg: "pink.500",
                }}
                _focus={{
                  bg: "pink.500",
                }}
                alignItems={"center"}
              >
                <ArrowRightIcon />
                <Text padding={"10px"}> Buy Now</Text>
              </Button>
            </Stack>
          </Box>
        </Flex>
        {/* --------------------------------------------------------- */}
        <Stack FlexDirection={"row"}>
          <Stack
            flex={1}
            flexDirection="column"
            borderWidth={"1px"}
            p={1}
            pt={2}
            height={"15px"}
            // height={{ sm: "476px", md: "20rem", lg: "200px" }}
            borderRadius={"10px"}
          >
            <Text mr={20} color={"gray"} fontSize={20} fontWeight={"600"}>
              HIP HOP FASHION sweatshirt
            </Text>
            <Heading>{"₹"}338</Heading>
            <Flex alignItems={"center"} gap={"10px"}>
              <Flex
                bg={"green.600"}
                borderRadius={"20px"}
                fontWeight={"600"}
                padding={"4px"}
                color={"white"}
                alignItems={"center"}
                width={"60px"}
              >
                <Text>4.1</Text>
                <i class="fa-regular fa-star"></i>
              </Flex>
              <Text color={"gray"} fontSize={"15px"} fontWeight={"600"}>
                11276 Ratings, 1590 Reviews
              </Text>
            </Flex>
            <Text
              p={"1px"}
              fontSize={"10px"}
              width={"90px"}
              borderRadius={"10px"}
              bg={"gray.100"}
              fontWeight={"600"}
            >
              Free Delivery
            </Text>
          </Stack>
          {/* --------------------------------------------------- */}
          <Box borderWidth={"1px"}>
            <Heading fontSize={"20PX"}>Select Size</Heading>
            <Flex alignItems={"center"} gap={"10px"}>
              <Button
                borderRadius={"10px"}
                padding={"5px 15px"}
                bg={"white"}
                borderWidth={"1px"}
              >
                S
              </Button>
              <Button
                borderRadius={"10px"}
                padding={"5px 15px"}
                bg={"white"}
                borderWidth={"1px"}
              >
                M
              </Button>
              <Button
                borderRadius={"10px"}
                padding={"5px 15px"}
                bg={"white"}
                borderWidth={"1px"}
              >
                XL
              </Button>
              <Button
                borderRadius={"10px"}
                padding={"5px 15px"}
                bg={"white"}
                borderWidth={"1px"}
              >
                L
              </Button>
              <Button
                borderRadius={"10px"}
                padding={"5px 15px"}
                bg={"white"}
                borderWidth={"1px"}
              >
                XXL
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Stack>
    </Center>
  );
}

export default CartDetail;
