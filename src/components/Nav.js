// Import React
import React from "react";
import { useState } from "react";

// SVG Icons
import aboutsvg from "../../assets/icons/about.svg"
import skillsvg from "../../assets/icons/skills.svg"
import projectsvg from "../../assets/icons/projects.svg"
import contactsvg from "../../assets/icons/contact.svg"
import githubsvg from '../../assets/logos/github.svg'
import linkedinsvg from '../../assets/logos/linkedin.svg'
import mailsvg from '../../assets/icons/mail.svg'

// TODO: Better hover effects and active styles

// Burger Menu Styling
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

function Nav({ view, setView }) {

  // Keeps track of whether or not the menu is open (mobile only)
  const [menuOpen, setMenuOpen] = useState(false);

  // Keeps the isOpen state of the menu synced with menuOpen state.
  const handleStateChange = (state) => {
    setMenuOpen(state);
  }

  // Closes the menu, changing the state and triggering isOpen to change..
  const closeMenu = () => {
    setMenuOpen(false);
  }

  // Whenever a nav link is clicked
  const handleMobileNav = async (location) => {
    closeMenu()
    await setView(location);
    console.log(location)
  }

  return (
    <>
      {/* Desktop Nav */}
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
        {/* <div className="navlink hover:navhover" onClick={() => { handleMobileNav("more") }}>
          <img className="nav-icon w-8" src={moresvg} alt="star icon" />
          <p>More</p>
        </div> */}
      </nav>
      {/* Mobile Nav */}
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
            <div className="mobile-link" onClick={() => { handleMobileNav("skills") }}>
              <img src={skillsvg} alt="lightbulb icon" />
              <p>Skills</p>
            </div>
            <div className="mobile-link" onClick={() => { handleMobileNav("contact") }}>
              <img src={contactsvg} alt="connect icon" />
              <p>Contact</p>
            </div>
            {/* <div className="mobile-link" onClick={() => { handleMobileNav("more") }}>
              <img className="w-8" src={moresvg} alt="star icon" />
              <p>More</p>
            </div> */}
          </div>
         
        </Menu>
      </nav>
    </>
  )
}

export default Nav;

// <ul className='flex flex-col justify-evenly w-full h-full'>
// {/* About Me */}
// <li className="navlink" onClick={() => { props.setView("about") }}>About Me</li>
// {/* Projects */}
// <li className="navlink" onClick={() => { props.setView("projects") }}>Projects</li>
// {/* Resume */}
// <li className="navlink" onClick={() => { props.setView("resume") }}>Resume</li>
// {/* Contact */}
// <li className="navlink" onClick={() => { props.setView("contact") }}>Contact</li>
// </ul>