import React, { useEffect, useRef } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
// import Skill from '../Skill/Skill';
import Graph from '../Graph/Graph';
// import Project from '../Project/Project';
// import Contact from '../Contact/Contact';
import { Skill } from '../Skill/Skill';
import { Contact } from '../Contact/Contact';
import Project2 from '../Project/Project2';



function Mainpages() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);
  const profile = useRef(null);
    useEffect(()=>{
        Aos.init({duration: 2000,});
      },[])
      const handleprofile = () => {
        // console.log(profile.current.offsetTop);
        console.log("hello")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    
      const handleabout = () => {
        window.scrollTo({
          top:about.current.offsetTop,
          behavior: "smooth",
        });
      };
      const handleprojects = () => {
        window.scrollTo({
          top: projects.current.offsetTop,
          behavior: "smooth",
        });
      };
      const handleskills = () => {
        window.scrollTo({
          top: skills.current.offsetTop,
          behavior: "smooth"
        });
      };
      const handlecontacts = () => {
        window.scrollTo({
          top: contacts.current.offsetTop,
          behavior: "smooth",
        });
      };
    
  return (
    <div>
      <Navbar
        handleabout={handleabout}
        handleprojects={handleprojects}
        handlecontacts={handlecontacts}
        handleprofile={handleprofile}
        handleskills={handleskills}
      />
      <div data-aos="fade-up" ref={profile}><Home/></div>
      <div data-aos="fade-up" ref={about}><About/></div>
      <div data-aos="fade-up" ref={skills}><Skill/></div>
      <div data-aos="fade-up"><Graph/></div>
      <div data-aos="fade-up" ref={projects}><Project2/></div>
      <div  ref={contacts}> <Contact/></div>
   
    </div>
  )
}

export default Mainpages
