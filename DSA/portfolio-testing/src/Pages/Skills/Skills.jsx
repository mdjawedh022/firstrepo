import React from "react";
import "./skills.css";
import { Box, Text, Image, useColorModeValue } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
const Skills = () => {
  const click = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
    <Box
    pt={{base:'55px',md:"55px",lg:"55px"}}
    name="skills" 
    bg={useColorModeValue("blue.800", "")} pb={"30px"}>
      <Box
      
        w={{ base: "90%", md: "90%", lg: "90%" }}
        m={{ base: "20px auto", md: "20px auto", lg: "50px auto" }}
      >
        <Text fontSize={{ base: "30px", md: "30px", lg: "50px" }}
        color={useColorModeValue("white", "")} fontWeight={'500'}>My Technical Skills</Text>

        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          <Box
            display={"flex"}
            height={"160px"}
            gap={"20px"}
            cursor={"pointer"}
            // bg={useColorModeValue('white',"")}
            m={{ base: "10px", md: "10px", lg: "19px" }}
          >
            {/* ------------html---------------- */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://en.wikipedia.org/wiki/HTML")}
            >
              <Image
              className="skills-card-img"
                width={"100%"}
                height={"80%"}
                src="https://raw.githubusercontent.com/jeny008/https---github.com-jeny008-portfolio/74fd6bda1e9ab99516893ed33f7184cf094ff429/src/assets/svg/skills/html.svg"
                alt="html"
              />
              <Text  className="skills-card-name">HTML</Text>
            </Box>
            {/* --------css----------------- */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://www.w3schools.com/css/")}
            >
              <Image
              className="skills-card-img"
                width={"100%"}
                height={"80%"}
                src="https://raw.githubusercontent.com/jeny008/https---github.com-jeny008-portfolio/74fd6bda1e9ab99516893ed33f7184cf094ff429/src/assets/svg/skills/css.svg"
                alt="css  "
              />
              <Text className="skills-card-name">CSS</Text>
            </Box>
            {/* ------------------javascript------------ */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://www.javascript.com/")}
            >
              <Image
              className="skills-card-img"
                width={"100%"}
                height={"80%"}
                src="https://p.kindpng.com/picc/s/476-4768341_javascript-logo-number-angularjs-node-javascript-transparent-background.png"
                alt="javascript"
              />
              <Text className="skills-card-name">Javascript</Text>
            </Box>
            {/* -------------------react-------------------- */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://reactjs.org/")}
            >
              <Image
              className="skills-card-img"
                width={"90%"}
                height={"70%"}
                mb={"14px"}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="react"
              />
              <Text className="skills-card-name">React</Text>
            </Box>
            {/* ---------typescript---------------- */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://www.typescriptlang.org/")}
            >
              <Image
              className="skills-card-img"
                width={"100%"}
                height={"70%"}
                mb={"14px"}
                src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png"
                alt="typescript"
              />
              <Text className="skills-card-name">Typescript</Text>
            </Box>
            {/* -----------------redux------------ */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://redux.js.org/")}
            >
              <Image
              className="skills-card-img"
                width={"100%"}
                height={"70%"}
                mb={"14px"}
                src="data:image/png;base64,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"
                alt="redux"
              />
              <Text className="skills-card-name">Redux</Text>
            </Box>
            {/* ---------------node.js-------------- */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://nodejs.org/en/")}
            >
              <Image
              className="skills-card-img"
                width={"90%"}
                height={"75%"}
                m={" auto auto 0 auto"}
                src="https://miro.medium.com/max/1000/1*TGwJKcxY8kGEenRLLedeLw.png"
                alt="node"
              />
              <Text className="skills-card-name">Node.js</Text>
            </Box>
            {/* -------------next.js------------ */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://nextjs.org/")}
            >
              <Image
              className="skills-card-img"
                width={"100%"}
                height={"70%"}
                mb={"14px"}
                src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
                alt="next.js"
              />
              <Text className="skills-card-name">Next.js</Text>
            </Box>
           
            {/* --------------------mango-db----------- */}
            <Box
            className="skills-card"
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              borderRadius={"10px"}
              padding={"10px 20px"}
              onClick={() => click("https://www.mongodb.com/")}
            >
              <Image
              className="skills-card-img"
                width={"100%"}
                height={"70%"}
                mb={"14px"}
                src="https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png"
                alt="mangoDB"
              />
              <Text className="skills-card-name">MongoDB</Text>
            </Box>
           
          </Box>
        </Marquee>

      </Box>

      <Box
      
      w={{ base: "90%", md: "90%", lg: "80%" }}
      m={{ base: "20px auto", md: "20px auto", lg: "50px auto" }}
    >
      <Text fontWeight={'500'} fontSize={{ base: "30px", md: "30px", lg: "50px" }}
      color={useColorModeValue("white", "")}>Tools</Text>

      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="right"
      >
        <Box
          display={"flex"}
          height={"160px"}
          gap={"20px"}
          cursor={"pointer"}
          // bg={useColorModeValue('white',"")}
          m={{ base: "10px", md: "10px", lg: "19px" }}
        >
         
         
          {/* -------------vs-------------- */}
          <Box
          className="skills-card"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            borderRadius={"10px"}
            padding={"10px 10px"}
            onClick={() => click("https://code.visualstudio.com/")}
          >
            <Image
            className="skills-card-img"
              width={"90%"}
              height={"70%"}
              mb={"14px"}
              src="https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg"
              alt="vs"
            />
            <Text className="skills-card-name">Visual studio code</Text>
          </Box>
          {/* -----------------git---------- */}
          <Box
          className="skills-card"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            borderRadius={"10px"}
            padding={"10px 20px"}
            onClick={() => click("https://git-scm.com/")}
          >
            <Image
            className="skills-card-img"
              width={"100%"}
              height={"70%"}
              mb={"14px"}
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt="git"
            />
            <Text className="skills-card-name">Git</Text>
          </Box>
         
          {/* -------------npm------------ */}
          <Box
          className="skills-card"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            borderRadius={"10px"}
            padding={"10px 20px"}
            onClick={() => click("https://www.npmjs.com/")}
          >
            <Image
            className="skills-card-img"
              width={"100%"}
              height={"70%"}
              mb={"14px"}
              src="https://camo.githubusercontent.com/6c10a8bff81bb32c29f35514bf2a2bcb434398b49a8a2a4b18343ae710ccd2f8/68747470733a2f2f6272616e646570732e636f6d2f6c6f676f2d646f776e6c6f61642f4e2f4e706d2d6c6f676f2d766563746f722d30312e737667"
              alt="npm"
            />
            <Text className="skills-card-name">npm</Text>
          </Box>

          {/* -------------postman----------------- */}
          <Box
          className="skills-card"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            borderRadius={"10px"}
            padding={"10px 20px"}
            onClick={() => click("https://www.postman.com/")}
          >
            <Image
            className="skills-card-img"
              width={"100%"}
              height={"70%"}
              mb={"14px"}
              src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"
              alt="postman"
            />
            <Text className="skills-card-name">Postman</Text>
          </Box>
          {/* -------chakra ui----------- */}
          <Box
          className="skills-card"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            borderRadius={"10px"}
            padding={"10px 20px"}
            onClick={() => click("https://chakra-ui.com/")}
          >
            <Image
            className="skills-card-img"
              width={"100%"}
              height={"70%"}
              mb={"14px"}
              src="https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png"
              alt="chakra ui"
            />
            <Text className="skills-card-name">Chakra UI</Text>
          </Box>
          {/* -----------------------bootstrap--------------- */}
          <Box
          className="skills-card"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            borderRadius={"10px"}
            padding={"10px 20px"}
            onClick={() => click("https://getbootstrap.com/")}
          >
            <Image
            className="skills-card-img"
              width={"100%"}
              height={"70%"}
              mb={"14px"}
              src="https://seeklogo.com/images/B/bootstrap-5-logo-85A1F11F4F-seeklogo.com.png"
              alt="bootstrap"
            />
            <Text className="skills-card-name">Bootstrap</Text>
          </Box>
          {/* ------material ui----------- */}
          <Box
          className="skills-card"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            borderRadius={"10px"}
            padding={"10px 20px"}
            onClick={() => click("https://mui.com/")}
          >
            <Image
            className="skills-card-img"
              width={"100%"}
              height={"70%"}
              mb={"14px"}
              src="https://png.pngitem.com/pimgs/s/577-5779757_react-material-ui-logo-hd-png-download.png"
              alt="material ui"
            />
            <Text className="skills-card-name">Material UI</Text>
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
