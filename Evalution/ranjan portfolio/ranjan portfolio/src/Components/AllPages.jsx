import React from "react";
import Navbar from "./Navbar";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from "./Contact";
import Github from "./Github";
import Project from "./Project";

const AllPages = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
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
