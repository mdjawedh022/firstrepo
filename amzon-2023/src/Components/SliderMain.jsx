import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import cards from "../data";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function SliderMian() {
  return (
    <>
     
     

      <Box w={'100%'}>
      <Text fontSize={{ base: "20px", md: "20px", lg: "25px" }}
      marginLeft={{base:"70px",md:'70px',lg:"69px"}}
    >
      Nike Circa
          </Text>
        <Carousel breakPoints={breakPoints}>
        {
            cards.map((e)=>(
              <Box m={'10px'}  _hover={{borderBottom:"2px",cursor:"pointer"}}>
      <Image src={e.img} alt="" />
      <Flex align={'center'} justifyContent={'space-between'}>
      <Text>{e.title}</Text>
      <Text>₹{e.price}</Text>
      </Flex>
      <Text color={'#757575'}>{e.desc}</Text>
              </Box>  
            ))
        }
        </Carousel>
     
      </Box>
    </>
  );
}

export default SliderMian
