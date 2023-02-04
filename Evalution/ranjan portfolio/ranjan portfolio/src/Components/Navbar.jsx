import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import SideDrawer from "./SideDraw";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav1">
        <img
          src="https://i.pinimg.com/474x/4d/35/c1/4d35c148dc6c150ee912b90f4c25e953.jpg"
          alt="ranjan"
        />
      </div>
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
        <button>Resume</button>
      </div>
      <div className="nav3">
       <SideDrawer />
      </div>

    </div>
  );
};

export default Navbar;
