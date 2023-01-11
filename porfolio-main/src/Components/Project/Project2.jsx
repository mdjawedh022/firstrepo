import React from 'react'
import Carousel from "react-elastic-carousel";
import pic1 from "../image/1.png";
import pic2 from "../image/2.png";
import "./project.css"
function Project2() {
    const handleclick = (url) => {
        window.open(url, "_blank");
      };
    
      const BreakPoints = [
        { width: 200, itemsToShow: 1, itemsToScroll: 1 },
        { width: 500, itemsToShow: 2, itemsToScroll: 2 },
        { width: 767, itemsToShow: 3, itemsToScroll: 3 },
      ];
  return (
    <div className="pDiv">
      <h1 id="heading">Projects</h1>
      <Carousel breakPoints={BreakPoints}>
        <div className="child">
          <h1 className="j">Tanishq</h1>
          <img src={pic1} alt="" />
          <p className="disc">
            Tanishq has emerged as India's fastest growing jewellery brand and
            is a name which signifies superior craftsmanship, exclusive designs
            and superlative product quality. 
          </p>
          <div className="tech1">
            <h3>Tech Stack</h3>
            <div className="tech">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="repobtn">
            <p
              onClick={() =>
                handleclick(
                  "https://github.com/mdjawedh022/mdjawedh022/tree/main/tanishq-main"
                )
              }
            >
              Repo <i className="fa-brands fa-github"></i>
            </p>
            <p
              onClick={() =>
                handleclick("https://reliable-madeleine-0f926f.netlify.app")
              }
            >
              Live <i className="fa-solid fa-up-right-from-square"></i>
            </p>
          </div>
        </div>
        <div className="child">
          <h1 className="j">J.Crew</h1>
          <img src={pic2} alt="" />
          <p className="disc">
            In this project we have tried to manipulate dom elements, styling
            using css and tried to make a dynamic and responsive website. we
            were able to clone more or less the whole website with same looking
            and features
          </p>
          <div className="tech1">
            <h3>Tech Stack</h3>
            <div className="tech">
              <p>Chakra UI</p>
              <p>CSS</p>
              <p>React.JS</p>
            </div>
          </div>
          <div className="repobtn">
            <p
              onClick={() =>
                handleclick("https://github.com/mdjawedh022/-hellish-cough-3444")
              }
            >
              Repo <i className="fa-brands fa-github"></i>
            </p>
            <p
              onClick={() =>
                handleclick("https://playful-melomakarona-1f7b4f.netlify.app")
              }
            >
              Live <i className="fa-solid fa-up-right-from-square"></i>
            </p>
          </div>
        </div>
        <div className="child">
          <h1 className="j">Tanishq</h1>
          <img src={pic1} alt="" />
          <p className="disc">
            Tanishq has emerged as India's fastest growing jewellery brand and
            is a name which signifies superior craftsmanship, exclusive designs
            and superlative product quality. 
          </p>
          <div className="tech1">
            <h3>Tech Stack</h3>
            <div className="tech">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="repobtn">
            <p
              onClick={() =>
                handleclick(
                  "https://github.com/mdjawedh022/mdjawedh022/tree/main/tanishq-main"
                )
              }
            >
              Repo <i className="fa-brands fa-github"></i>
            </p>
            <p
              onClick={() =>
                handleclick("https://reliable-madeleine-0f926f.netlify.app")
              }
            >
              Live <i className="fa-solid fa-up-right-from-square"></i>
            </p>
          </div>
        </div>
       
       
      </Carousel>
      
    </div>
  )
}

export default Project2
