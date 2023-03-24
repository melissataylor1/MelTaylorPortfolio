// Import React
import React from "react";
import { useState } from "react";

// SVG Icons
import aboutsvg from "../../assets/icons/about.svg"
import skillsvg from "../../assets/icons/skills.svg"
import projectsvg from "../../assets/icons/projects.svg"
import contactsvg from "../../assets/icons/contact.svg"
/*
import githubsvg from '../../assets/logos/github.svg'
import linkedinsvg from '../../assets/logos/linkedin.svg'
import mailsvg from '../../assets/icons/mail.svg' */

function Nav({ view, setView }) {



  return (
  
      
      <nav className=' h-1/3 hidden md:flex flex-col justify-between w-full' >
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("about") }}>
          <img className="nav-icon" src={aboutsvg} alt="about icon" />
          <p className='navlabel'>About Me</p>
        </div>
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("projects") }}>
          <img className="nav-icon" src={projectsvg} alt="briefcase icon" />
          <p>Projects</p>
        </div>
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("skills") }}>
          <img className="nav-icon" src={skillsvg} alt="lightbulb icon" />
          <p>Skills</p>
        </div>
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("contact") }}>
          <img className="nav-icon" src={contactsvg} alt="connect icon" />
          <p>Contact</p>
        </div>
        
      </nav>


  
  )
}

export default Nav;

