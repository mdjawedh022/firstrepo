import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "./student.css";

const Student = () => {
  return (
    <Box>
      <Box marginTop={10} textAlign={"Center"}>
        <Heading>Thousands Trust Masai To</Heading>
        <Heading>Launch Their Career</Heading>
      </Box>
      <div className="student-section">
        <div className="student-section-div">
          <div>
            <img
              className="logo-comp1"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Aayushi_527cd1c2a3.jpg"
              alt="s"
            />
          </div>
          <div className="student-text-logo">
            <Text padding={5} fontSize={15}>
              I got placed within 2 days after graduation! I’m happy I am part
              of the Masai family, not because they helped me but because of
              their mission to help other lost..
            </Text>
            <p className="text-student-name">Aayushi Shah</p>
            <img
              className="logo-comp"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg"
              alt=""
            />
          </div>
        </div>

        <div className="student-section-div">
          <div>
            <img
              className="logo-comp1"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg"
              alt="s"
            />
          </div>
          <div className="student-text-logo">
            <Text>
              Masai brought discipline to my life, helped me develop a coder’s
              mindset and increase my concentration as well as time management
              skills. It took me..
            </Text>
            <p className="text-student-name">Kritika Tripathi</p>
            <img
              className="logo-comp"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png"
              alt=""
            />
          </div>
        </div>

        <div className="student-section-div">
          <div>
            <img
              className="logo-comp1"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Lokesh_Nimje_90cfa775e3.jpg"
              alt="s"
            />
          </div>
          <div className="student-text-logo">
            <Text>
              Projects are a part of journey at Masai. It gives the opportunity
              to work in a team, which gives a real experience of the corporate
              world. This helps students to..
            </Text>
            <p className="text-student-name">Lokesh Nimje</p>
            <img
              className="logo-comp"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/MPL_7713ca3d5b.svg"
              alt=""
            />
          </div>
        </div>

        <div className="student-section-div">
          {" "}
          <div>
            <img
              className="logo-comp1"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Lalitha_9c1e4f1cab.jpg"
              alt="s"
            />
          </div>
          <div className="student-text-logo">
            <Text>
              I left a job at Infosys to learn coding. Masai helped me get 3X
              more salary in a product-based company.
            </Text>
            <p className="text-student-name">Lalitha Perumalla</p>
            <img
              className="logo-comp"
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Ajio_2ba59d62cb.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Box textAlign={"Center"} mt={10}>
        {" "}
        <Button colorScheme="red">SEE MORE {">"} </Button>
      </Box>
    </Box>
  );
};

export default Student;
