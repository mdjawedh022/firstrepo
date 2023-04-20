import React from "react";
import TopNavbar from "./TopNavbar";
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <Box
        w={{ base: "100%", md: "100%", lg: "100%" }}
        position={"fixed"}
        top={"0"}
        zIndex={'3'}

      >
        {/* -----top-navbar------- */}
        <Box display={{ base: "none", md: "none", lg: "block" }}>
          <TopNavbar />
        </Box>
        <Box
          w={{ base: "100%", md: "100%", lg: "100%" }}
          h={"65px"}
          borderWidth={"1px"}
          background={'white'}
          
        >
          <Flex paddingBottom={'20px'} alignItems={"center"} gap={{ base: "", md: "200px", lg: "300px" }}>
            <Box>
              <Link to="/">
                <svg
                  aria-hidden="true"
                  className="pre-logo-svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="74px"
                  height="74px"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    // fill-rule="evenodd"
                    d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                    // clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </Box>
            <Box
              m={{}}    
              gap={"25px"}
              ml="70px"
              display={{ base: "none", md: "none", lg: "flex" }}
            >
             <Link to=""> <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Men
              </Text> </Link>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Women
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Customise
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Kids
              </Text>
              <Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                Sales
              </Text>
              <Link to="/shoe"><Text cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
                SNKRS
              </Text></Link>
            </Box>
            <Flex align={'center'} gap={{md:'150px',lg:"0px"}}>
            <InputGroup>
                <Input
                  type="text"
                  borderRadius={"20px"}
                  placeholder="search.."
                />
                <InputLeftElement h={"full"}>
                  <SearchIcon width={"40px"} />
                </InputLeftElement>
              </InputGroup>
                  <Flex>

                    
              <Tooltip label={"Favourites"} hasArrow>
                <IconButton
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<CiHeart />}
                  isRound
                />
              </Tooltip>

              <Tooltip label={"Bag item: 0"} hasArrow>
                <IconButton
                  variant="ghost"
                  size="lg"
                  fontSize="3xl"
                  icon={<HiOutlineShoppingBag />}
                  isRound
                />
              </Tooltip>
                  </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
