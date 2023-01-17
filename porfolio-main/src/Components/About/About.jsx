import React from "react";
import { Card, CardHeader, CardBody, Heading, Text } from "@chakra-ui/react";
function About() {
  return (
    <div>
      <Card
        align="center"
        w={{ base: "90%", sm: "3xl", lg: "7xl" }}
        margin={"auto"}
      >
        <CardHeader>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
            fontFamily={""}
          >
            {" "}
            About
          </Heading>
        </CardHeader>
        <CardBody>
          <Text
            fontSize={{ base: "10px", sm: "20", lg: "25" }}
            fontWeight={{ base: "400", sm: "2xl", lg: "600" }}
          >
            I am a creative, observing, analytical, and aspiring Full-Stack Web
            Developer from MASAI SCHOOL specializing in MERN STACK. Having the
            technical skills in HTML, CSS, javascript, react js, node js, and
            mogo database, I have cloned several websites during my course
            duration here at Masai school.and computer science drag me to become
            a full-stack web developer. I have cloned Tanshiq and J.Cre w. Here I
            was also groomed with soft skills.
          </Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default About;
