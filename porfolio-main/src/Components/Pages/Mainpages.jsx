import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
// import Skill from '../Skill/Skill';
import Graph from '../Graph/Graph';
import Project from '../Project/Project';
// import Contact from '../Contact/Contact';
import { Skill } from '../Skill/Skill';
import { Contact } from '../Contact/Contact';



function Mainpages() {

    useEffect(()=>{
        Aos.init({duration: 2000,});
      },[])
    
    
  return (
    <div>
      <Navbar/>
      <div data-aos="fade-up"><Home/></div>
      <div data-aos="fade-up"><About/></div>
      <div data-aos="fade-up"><Skill/></div>
      <div data-aos="fade-up"><Graph/></div>
      <div data-aos="fade-up"><Project/></div>
      <div data-aos="fade-up"> <Contact/></div>
   
    </div>
  )
}

export default Mainpages
