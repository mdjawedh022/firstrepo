import React from "react";
import "./Navbar1.css";
import { Link } from "react-scroll";
import SideDrawer from "./SideDraw";
import resume from './Ranjan-Kumar-Resume.pdf'

const Navbar1 = () => {
  const onButtonClick = () => {
    window.open('https://drive.google.com/file/d/1SZlSUbFUAtfxFC_ITmBsnTj4_znPzEkA/view?usp=share_link')
  }
  return (
    <div className="nav">
      <Link to="home" smooth={true} duration={1000}>
      <div className="nav1">
        <img
        className="ranjan-logo"
          src="https://i.pinimg.com/474x/4d/35/c1/4d35c148dc6c150ee912b90f4c25e953.jpg"
          alt="ranjan"

        />
      </div></Link>
      <div className="nav2">
        <Link to="home" smooth={true} duration={1000}>
          <button>Home</button>
        </Link>

        <Link to="about" smooth={true} duration={1000}>
          <button>About</button>
        </Link>

        <Link to="skill" smooth={true} duration={1000}>
        <button>Skill</button>
        </Link>

        <Link to="project" smooth={true} duration={1000}>
          <button>Project</button>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
        <button>Contact</button>
        </Link>
        <a href={resume} download><button onClick={onButtonClick}>Resume</button></a>
      </div>
      <div className="nav3">
       <SideDrawer />
      </div>

    </div>
  );
};

export default Navbar1;
