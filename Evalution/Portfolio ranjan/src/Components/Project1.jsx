/* eslint-disable react/jsx-no-target-blank */
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Project.css";
import logo from "./Projectlogo/bellavita.png";
import Logo from "./Projectlogo/kindmeal.png";
import image from "./Projectlogo/Lyst.png";
import images from "./Projectlogo/healthcart.png";
import {AiOutlineGithub,AiOutlineHtml5} from "react-icons/ai"
import {BsBoxArrowUpRight} from "react-icons/bs"
import {GrHeroku} from "react-icons/gr"
import {SiChakraui,SiRedux,SiReact} from "react-icons/si"
import {FaGit} from "react-icons/fa"
import {TbBrandCss3,TbBrandJavascript,TbApi} from "react-icons/tb"

const Project1 = () => {
  return (
    <>
      <Box w={{ base: "100%", md: "100%", lg: "100%" }} mt={{base:'10%',md:'10%',lg:'7%'}}>
        <Box mb={'30px'}>
          <Text fontSize={{base:'35px',md:'45px',lg:'50px'}} fontWeight={'500'}
          fontFamily={'Cambria, Cochin, Georgia, Times, Times New Roman, serif'}
          >Latest Project</Text>
        </Box>
        <Box
          name="project"
          w={{ base: "90%", md: "80%", lg: "75%" }}
          m={"auto"}
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={'20px'}
        >
                  <div className="card">
          <div>
            <img src={images} alt="" />
          </div>
          <div >
            <p >HealthKart</p>
            <p>
              An E-commerce website that brings to users the latest product like
              Protein, Gainer, and Creating product
            </p>
           
          </div>
          <div>
          <p className="techstack">Tech-Stack</p>
            <div className="project-techstck"> <SiReact/>  <SiRedux/>  <SiChakraui/> <GrHeroku/> <FaGit/></div>
          </div>
          <div className="button">
            <a
              href="https://github.com/rahulbnc463/hunky-advertisement-4799"
              target="_blank"
            >
              <button className="git-button-navigate">Github <AiOutlineGithub/></button>
            </a>
            <a href="https://hunky-advertisement-4799.netlify.app/" target="_blank">
              <button className="netlify-button-navigate">Netlify <BsBoxArrowUpRight/></button>
            </a>
          </div>
        </div> 
          {/* ---------------------- */}
              <div className="card">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p>bella vita organic</p>
            <p>
              An E-commerce website that brings to users the latest product like
              body care, Skin care, Sensitive skin, and Summer Essentials
              product
            </p>
           
          </div>
          <div>
          <p className="techstack">Tech-Stack</p>
            <div  className="project-techstck"><AiOutlineHtml5/>|| <TbBrandCss3/> || <TbBrandJavascript/> || <TbApi/> || <FaGit/></div>
          </div>
          <div className="button">
            <a
              href="https://github.com/ranjankumar9/reach-wren-1563"
              target="_blank"
            >
              <button className="git-button-navigate">Github <AiOutlineGithub/></button>
            </a>
            <a
              href="https://bellavitaorganic1.netlify.app/index.html"
              target="_blank"
            >
              <button className="netlify-button-navigate">Netlify <BsBoxArrowUpRight/></button>
            </a>
          </div>
        </div>
        {/* -------------- */}
        <div className="card">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <p>kindmeal</p>
            <p>
              Malaysia's No.1 meat-free lifestyle platform. This website
              promotes a compassionate, meat-free dining experience. Some food
              may contain eggs and dairy products.
            </p>
           
          </div>
          <div>
          <p className="techstack">Tech-Stack</p>
            <div className="project-techstck"><AiOutlineHtml5/>|| <TbBrandCss3/> || <TbBrandJavascript/> || <TbApi/> || <FaGit/></div>
          </div>
          <div className="button">
            <a
              href="https://github.com/starkex/arrogant-beef-5673"
              target="_blank"
            >
              <button className="git-button-navigate">Github <AiOutlineGithub/></button>
            </a>
            <a
              href="https://sweet-sunshine-5a208c.netlify.app/index.html"
              target="_blank"
            >
              <button className="netlify-button-navigate">Netlify <BsBoxArrowUpRight/></button>
            </a>
          </div>
          </div>
{/* ------------------------------ */}
<div className="card">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <p>Lyst</p>
            <p>
              An E-commerce website that brings to users the latest product like
              Cloth, Shoes, and Summer Essentials product
            </p>
         
        
          </div>
          <div>
          
          <p className="techstack">Tech-Stack</p>
             <div className="project-techstck"> <SiReact/> || <SiChakraui/> ||<GrHeroku/>|| <FaGit/></div>
           
          </div>
          <div className="button">
            <a
              href="https://github.com/erpushpendrasingh/seemly-porter-7181"
              target="_blank"
            >
              <button className="git-button-navigate">Github <AiOutlineGithub/></button>
            </a>
            <a href="https://seemly-porter-7181a.netlify.app/" target="_blank">
              <button className="netlify-button-navigate">Netlify <BsBoxArrowUpRight/></button>
            </a>
          </div>
        </div>


        </Box>
      </Box>
    </>
  );
};

export default Project1;
