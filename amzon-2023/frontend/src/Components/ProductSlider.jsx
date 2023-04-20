import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import stories from "../Data/Stories";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ProductSlider() {
  return (
    <>
     
     

      <Box w={'100%'}>
      <Text fontSize={{ base: "20px", md: "20px", lg: "25px" }}
      marginLeft={{base:"70px",md:'70px',lg:"69px"}}
    >
     Related Stories
          </Text>
        <Carousel breakPoints={breakPoints}>
        {
            stories.map((e)=>(
              <Box m={'10px'}  _hover={{borderBottom:"2px",cursor:"pointer"}}>
      <Image src={e.photo} alt="" />
     
      <Text>{e.title}</Text>
      <Text color={'#757575'}>{e.des}</Text>
     
              </Box>  
            ))
        }
        </Carousel>
     
      </Box>
    </>
  );
}

export default ProductSlider
