import { Box, Button, Heading, Text} from "@chakra-ui/react";
import React from "react";
import "./mentor.css"
import mentor from "./mentor.js";
// import mentor from "./mentor.js"
const Mentor = () => {
  return (
    <Box>
      <Heading textAlign={"Center"}>Meet Your Instructors</Heading>
      <Text textAlign={"Center"} fontWeight={"600"}>
        With extensive industry experience, the Masai Curriculum Team is a group
        of expert instructors.
      </Text>
      <div className="mentor-section">
        {mentor.map((men)=>(
            <div key={men.id} className="mentor-section-div">
                <img src={men.img} alt="shabbaj"  className="img"/>
                <h1 className="h1-mentor">{men.title}</h1>
                <p>{men.tag}</p>
                <hr />
                <img src={men.img1} alt="shabbaj" className="img1"/>
            </div>
        ))}
      </div>
     <Box textAlign={"Center"}> <Button  colorScheme='red'>SEE MORE {'>'} </Button></Box>
    </Box>
  );
};

export default Mentor;
