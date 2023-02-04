import React from "react";
import "./Project.css";
import logo from "./Projectlogo/bellavita.png";
import Logo from "./Projectlogo/kindmeal.png";
import image from "./Projectlogo/Lyst.png";
import images from "./Projectlogo/healthcart.png";

const Project = () => {
  return (
    <div className="headings">
      <div>
        <p>Latest Project</p>
      </div>
      <div name="project" className="projectcard">
    

        <div className="first-div-project"> 
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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a
              href="https://bellavitaorganic1.netlify.app/index.html"
              target="_blank"
            >
              <button>Netlify</button>
            </a>
          </div>
        </div>
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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a
              href="https://sweet-sunshine-5a208c.netlify.app/index.html"
              target="_blank"
            >
              <button>Netlify</button>
            </a>
          </div>
          </div>
          </div>
        <div className='second-div-project'>
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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a href="https://seemly-porter-7181a.netlify.app/" target="_blank">
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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a href="https://seemly-porter-7181a.netlify.app/" target="_blank">
              <button>Netlify</button>
            </a>
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default Project;


    // eslint-disable-next-line no-lone-blocks
    {/* <div className="card">
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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a
              href="https://bellavitaorganic1.netlify.app/index.html"
              target="_blank"
            >
              <button>Netlify</button>
            </a>
          </div>
        </div>

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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a
              href="https://sweet-sunshine-5a208c.netlify.app/index.html"
              target="_blank"
            >
              <button>Netlify</button>
            </a>
          </div>
        </div>

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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a href="https://seemly-porter-7181a.netlify.app/" target="_blank">
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
              target="_blank"
            >
              <button>Github</button>
            </a>
            <a href="https://seemly-porter-7181a.netlify.app/" target="_blank">
              <button>Netlify</button>
            </a>
          </div>
        </div> */}