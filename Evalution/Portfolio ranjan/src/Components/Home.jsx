import React from "react";
import "./Home.css";
import DownloadLink from "react-download-link";
import resume from './Ranjan-Kumar-Resume.pdf'

const Home = () => {

  const onButtonClick = () => {
    window.open('https://drive.google.com/file/d/1SZlSUbFUAtfxFC_ITmBsnTj4_znPzEkA/view?usp=share_link')
}

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
          
          <a href={resume} target="_blank" download>
            <button onClick={onButtonClick}>
              Resume
            </button>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
