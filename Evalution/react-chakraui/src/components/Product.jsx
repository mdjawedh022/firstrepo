import React from "react";
import { Text, Image, Box, Heading, Flex } from "@chakra-ui/react";
import { Stack, Tag, TagLabel, Spacer } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

const Product = ({ image, title, category, gender, price, id }) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <Box boxShadow="xs" p="6" rounded="md">
      <Stack data-cy="product" key={id}>
        <Image data-cy="product-image" src={image} alt={title} />
        <Flex>
          <Text data-cy="product-category" color="teal">{category}</Text>
          <Spacer />
          <Tag>
            <TagLabel data-cy="product-gender" bg="teal" color="white">{gender}</TagLabel>
          </Tag>
        </Flex>
        <Center>
          <Heading data-cy="product-title" color="teal">{title}</Heading>
        </Center>
        <Center>
          <Box data-cy="product-price">{price}</Box>
        </Center>
      </Stack>
    </Box>
  );
};

export default Product;
