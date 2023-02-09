import React from 'react'
import Navbar from '../../Components/Navbar'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Github from '../Github/Github'
import Home from '../Home/Home'
import Project from '../Projects/Project'
import Skills from '../Skills/Skills'

const AllPages = () => {
  return (
    <>
      <div >
        <Navbar/>
        </div>
      <div data-aos="fade-up">
        <Home/>
      </div>
      <div data-aos="fade-up">
        <About/>
      </div>
      <div data-aos="fade-up">
        <Skills/>
      </div>
      <div data-aos="fade-up">
        <Github/>
      </div>
      <div data-aos="fade-up">
      <Project/>
      </div>
      <div data-aos="fade-up">
      <Contact/>
      </div>
      <div data-aos="fade-up"></div>
    </>
  )
}

export default AllPages
