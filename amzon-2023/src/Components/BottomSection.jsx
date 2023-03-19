import { Container, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BottomSection = () => {
  return (
    <>
      <Container as={Stack} maxW={{ md:"3xl",lg:"4xl"}} py={10} m={"auto"}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={{base:"",md:6,lg:8}}>
          <Stack align={"flex-start"}>
            <Text>Icons</Text>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Air Force 1
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Huarache
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Air Max 90
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Air Max 95
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Air Max 97
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text>Shoes</Text>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              All Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Custom Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Jordan Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Running Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Basketball Shoes
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text>Clothing</Text>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              All Clothing
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Modest Wear
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Hoodies & Pullovers
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Shirts & Tops
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Jackets
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Text>Kid's</Text>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Infant & Toddler Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Kid's Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Kid's Jordan Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Kid's Basketball Shoes
            </Link>
            <Link
              color="#757575"
              _hover={{ textDecoration: "none", color: "#757575" }}
              href={"#"}
            >
              Kid's Running Shoes
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default BottomSection;
