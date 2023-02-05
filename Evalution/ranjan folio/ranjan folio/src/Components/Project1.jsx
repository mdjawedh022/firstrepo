import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Project.css";
import logo from "./Projectlogo/bellavita.png";
import Logo from "./Projectlogo/kindmeal.png";
import image from "./Projectlogo/Lyst.png";
import images from "./Projectlogo/healthcart.png";

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
            <img src={logo} alt="" />
          </div>
          <div>
            <p>bella vita organic</p>
            <p>
              An E-commerce website that brings to users the latest product like
              body care, Skin care, Sensitive skin, and Summer Essentials
              product
            </p>
            <p>TeckStack : HTML || CSS || JavaScript || Api || Git</p>
          </div>
          <div className="button">
            <a
              href="https://github.com/ranjankumar9/reach-wren-1563"
              target=""
            >
              <button>Github</button>
            </a>
            <a
              href="https://bellavitaorganic1.netlify.app/index.html"
              target=""
            >
              <button>Netlify</button>
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
            <p>TeckStack : HTML || CSS || JavaScript || Api || Git</p>
          </div>
          <div className="button">
            <a
              href="https://github.com/starkex/arrogant-beef-5673"
              target=""
            >
              <button>Github</button>
            </a>
            <a
              href="https://sweet-sunshine-5a208c.netlify.app/index.html"
              target=""
            >
              <button>Netlify</button>
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
            <p>TeckStack : React || Chakra UI || Heroku || Git</p>
          </div>
          <div className="button">
            <a
              href="https://github.com/erpushpendrasingh/seemly-porter-7181"
              target=""
            >
              <button>Github</button>
            </a>
            <a href="https://seemly-porter-7181a.netlify.app/" target="">
              <button>Netlify</button>
            </a>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={images} alt="" />
          </div>
          <div>
            <p>Lyst</p>
            <p>
              An E-commerce website that brings to users the latest product like
              Protein, Gainer, and Creating product
            </p>
            <p>TeckStack : React || React-Redux || Chakra UI || Heroku || Git</p>
          </div>
          <div className="button">
            <a
              href="https://github.com/erpushpendrasingh/seemly-porter-7181"
              target=""
            >
              <button>Github</button>
            </a>
            <a href="https://seemly-porter-7181a.netlify.app/" target="">
              <button>Netlify</button>
            </a>
          </div>
        </div> 

        </Box>
      </Box>
    </>
  );
};

export default Project1;
