import React from "react";
import Navbar1 from "./Navbar1";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from "./Contact";
import Github from "./Github";
import Project1 from "./Project1";
import Skill from "./Skill";
import Project from "./Project";


const AllPages = () => {
  return (
    <div>
      <div >
        <Navbar1 />
      </div>
      <div style={{marginTop:'40px'}}>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div >
        <Skill />
      </div>
      <div>
        <Github />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default AllPages;
