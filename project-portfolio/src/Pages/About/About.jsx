import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import "./about.css";
const About = () => {
  return (
    <>
      <Box  m={{ base: "20px auto", md: " 20px auto", lg: "30px auto" }}>
      <Text fontSize={{ base: "20px", md: "30px", lg: "50px" }}>About Me</Text>
        <Box
          w={{ base: "90%", md: "90%", lg: "80%" }}
          m={{ base: "20px auto", md: " 20px auto", lg: "30px auto" }}
          display={"grid"}
          gap={"20px"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          alignItems={'center'}
        >
          
          <Box>
            <Image
              src={
                "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1914164533-1652959735.jpg&w=900&height=601"
              }
              borderRadius={"20px"}
            />
          </Box>
          <Box>
            {" "}
            <Text fontSize={{ base: "15px", md: "20px", lg: "20px" }}>
              I am a creative, observing, analytical, and aspiring FULL-STACK
              Web Developer from Masai School specializing in MERN stack. Having
              the technical skills in HTML, CSS, javascript, react js, node js,
              and mogo database, I have cloned several websites during my course
              duration here at Masai school.and computer science drag me to
              become a full-stack web developer. I have cloned Tanshiq and
              J.Crew. Here I was also groomed with soft skills.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
// https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1914164533-1652959735.jpg&w=900&height=601
