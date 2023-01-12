import React, { useEffect, useRef } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from '../Components/Navbar';
import About from './About';
import Home from './Home';
import Skills from './Skills';
import { Box } from '@chakra-ui/react';
import Projects from './Projects';
import Contact from './Contact';

const MainPage = () => {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);
  const home = useRef(null);
  

  useEffect(()=>{
    Aos.init({duration: 2000,});
  },[])


  const handleHome = () => {
    // console.log("hello")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAbout = () => {
    window.scrollTo({
      top:about.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handleProjects = () => {
    window.scrollTo({
      top: projects.current.offsetTop,
      behavior: "smooth",
    });
  };
  const handleSkills = () => {
    window.scrollTo({
      top: skills.current.offsetTop,
      behavior: "smooth"
    });
  };
  const handleContacts = () => {
    window.scrollTo({
      top: contacts.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar
        handleHome={handleHome}
        handleAbout={handleAbout}
        handleProjects={handleProjects}
        handleContacts={handleContacts}
        handleSkills={handleSkills}
      />



      <Box p={8}>
      
          <div data-aos="fade-up" ref={home}>
          <Home />
          </div>
        <div data-aos="fade-up" ref={about}>
          <About />
        </div>
        <div data-aos="fade-up" ref={skills}>
          <Skills />
        </div >
        <div data-aos="fade-up" ref={projects}>
             <Projects/>
        </div>

        <div data-aos="fade-up" ref={contacts}><Contact/></div>
      </Box>
    </>
  )
}

export default MainPage