import React from "react";
import "./Home.css";
import resume from "./Ranjan_Kumar_Resume.pdf";
import Link from 'react-router-dom'

const Home = () => {

  const handleResume = () => {
    
  };

  return (
    <div name="home" className="header">
      <div className="header2">
        <img
          src="https://avatars.githubusercontent.com/u/107936455?v=4"
          alt=""
        />
      </div>
      <div className="header1">
        <div className="head1">
          <h2>HEY, MY NAME IS</h2>
        </div>
        <div className="head2">
          <h1>RANJAN KUMAR</h1>
        </div>
        <div className="head3">
          <h3>I AM A FULL STACK WEB DEVELOPER</h3>
        </div>
        <div className="head4">
          <p>
            I Create Website, Based On Your <br />
            Needs!
          </p>
        </div>
        <div className="head5">
          
          <a href={resume} download>
            <button onClick={handleResume}>
              Resume
            </button>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
