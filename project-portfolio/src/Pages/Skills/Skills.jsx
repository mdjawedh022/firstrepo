import React from "react";
import "./skills.css";
import { Box, Text, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
const Skills = () => {
  const click = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Box
        w={{ base: "90%", md: "90%", lg: "90%" }}
        m={{ base: "", md: "", lg: "20px auto" }}
      >
        <Text fontSize={{ base: "20px", md: "30px", lg: "50px" }}>Skills</Text>
        <Box>
          <Marquee>
            <Box display={"flex"} height={"150px"}>
              <Box
                boxShadow={
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                }
                onClick={() => click("https://en.wikipedia.org/wiki/HTML")}
              >
                <Image
                  width={"100%"}
                  height={"100%"}
                  src="https://camo.githubusercontent.com/0821ae25cbd292f1c724d2fbf808a78136e61c72ec42a1a961d2be9288441930/68747470733a2f2f7777772e77332e6f72672f68746d6c2f6c6f676f2f646f776e6c6f6164732f48544d4c355f4c6f676f5f3531322e706e67"
                  alt="html"
                />
              </Box>
            </Box>
          </Marquee>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
// box-shadow: ;
