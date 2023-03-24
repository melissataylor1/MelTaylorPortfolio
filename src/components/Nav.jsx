// Import React
import React from "react";
import { useState } from "react";
import { slide as Menu } from 'react-burger-menu'
// SVG Icons
import aboutsvg from "../assets/icons/about.svg"
import skillsvg from "../assets/icons/skills.svg"
import projectsvg from "../assets/icons/projects.svg"
import contactsvg from "../assets/icons/contact.svg"

import githubsvg from '../assets/icons/github.svg'
import linkedinsvg from '../assets/icons/linkedin.svg'
import mailsvg from '../assets/icons/mail.svg' 

// Mobile Menu Styles
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#111',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

function Navbar({ view, setView }) {

  const [menuOpen, setMenuOpen] = useState(false);

  // Keeps the isOpen state of the menu synced with menuOpen state.
  const handleStateChange = (state) => {
    setMenuOpen(state);
  }

  
  const closeMenu = () => {
    setMenuOpen(false);
  }
  const handleMobileNav = async (location) => {
    closeMenu()
    await setView(location);
    console.log(location)
  }

  return (
  //DESKTOP
    <>
      <nav className=' h-1/3 hidden md:flex flex-col justify-between w-full text-slate-50' >
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("about") }}>
          <img className="nav-icon" src={aboutsvg} alt="about icon" />
          <p className='navlabel'>About Me</p>
        </div>
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("projects") }}>
          <img className="nav-icon" src={projectsvg} alt="briefcase icon" />
          <p>Projects</p>
        </div>
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("resume") }}>
          <img className="nav-icon" src={skillsvg} alt="lightbulb icon" />
          <p>Resume</p>
        </div>
        <div className="navlink hover:navhover" onClick={() => { handleMobileNav("contact") }}>
          <img className="nav-icon" src={contactsvg} alt="connect icon" />
          <p>Contact</p>
        </div>
        
      </nav>

       
       <nav className="md:hidden mb-10">
       <Menu styles={styles} width={'100vw'} right isOpen={menuOpen} onStateChange={({ menuOpen }) => handleStateChange(menuOpen)}>
         <div className='h-1/2 flex flex-col justify-between w-full' >
           <div className="mobile-link" onClick={() => { handleMobileNav("about") }}>
             <img src={aboutsvg} alt="about icon" />
             <p>About Me</p>
           </div>
           <div className="mobile-link" onClick={() => {  handleMobileNav("projects") }}>
             <img src={projectsvg} alt="briefcase icon" />
             <p>Projects</p>
           </div>
           <div className="mobile-link" onClick={() => { handleMobileNav("resume") }}>
             <img src={skillsvg} alt="lightbulb icon" />
             <p>Resume</p>
           </div>
           <div className="mobile-link" onClick={() => { handleMobileNav("contact") }}>
             <img src={contactsvg} alt="connect icon" />
             <p>Contact</p>
           </div>
          
         </div>
         <div className="w-full">
           <ul className='mobile-social flex justify-evenly items-center h-1/3'>
              {/* Gmail */}
              <a className="transition-transform-colors hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full" href="mailto:meltee@live.com" target='_blank' rel="noreferrer" name="Link to create and send an email."><img className="contactlink" src={mailsvg} alt="Mail logo." /></a>
               {/* Linked In */}
               <a className="transition-transform-colors hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full" href="https://www.linkedin.com/in/melissa-taylor-aba356217/" target='_blank' rel="noreferrer" name="Link to Mel's LinkedIn"><img className="contactlink" src={linkedinsvg} alt="LinkedIn logo" /></a>
               {/* GitHub */}
               <a className="transition-transform-colors hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full" href="https://github.com/melissataylor1" target='_blank' rel="noreferrer" name="Link to Mel's GitHub Profile"><img className="contactlink" src={githubsvg} alt="GitHub logo" /></a>
           </ul>
         </div>
       </Menu>
     </nav>

     </>
  
  )
}

export default Navbar;

