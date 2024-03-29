// Import React
import React from "react";
import { useState } from "react";
//burger menu for mobile
import { slide as Menu } from "react-burger-menu";
// SVG Icons
import aboutsvg from "../assets/icons/about.svg";
import skillsvg from "../assets/icons/skills.svg";
import projectsvg from "../assets/icons/projects.svg";
import contactsvg from "../assets/icons/contact.svg";

import githubsvg from "../assets/icons/github.svg";
import linkedinsvg from "../assets/icons/linkedin.svg";
import mailsvg from "../assets/icons/mail.svg";
import resume from "../assets/24_02MelissaTaylorResume.pdf";
// Mobile Burger Menu Styles
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "20px",
    background: "#000",
  },
  bmBurgerBars: {
    background: "#fff",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#111",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
//SETS 'VIEW' PROPS FOR NAV BAR
function Navbar({ view, setView }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Keeps the isOpen state of the menu synced with menuOpen state.
  const handleStateChange = (state) => {
    setMenuOpen(state);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleMobileNav = async (location) => {
    closeMenu();
    await setView(location);
    console.log(location);
  };

  return (
    //DESKTOP
    <>
      <nav className=" h-1/3 hidden md:flex flex-col justify-between w-full text-slate-50">
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("about");
          }}
        >
          <img className="mr-2" src={aboutsvg} alt="about icon" />
          <p>About</p>
        </div>
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("projects");
          }}
        >
          <img className="mr-2" src={projectsvg} alt="briefcase icon" />
          <p>Works</p>
        </div>
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("resume");
          }}
        >
          <img className="mr-2" src={skillsvg} alt="lightbulb icon" />
          <p>Resume</p>
        </div>
        <div
          className="navlink hover:navhover"
          onClick={() => {
            handleMobileNav("contact");
          }}
        >
          <img className="mr-2" src={contactsvg} alt="connect icon" />
          <p>Contact</p>
        </div>
      </nav>

      {/*MOBILE*/}
      <nav className="md:hidden mb-10">
        <Menu
          styles={styles}
          width={"100vw"}
          right
          isOpen={menuOpen}
          onStateChange={({ menuOpen }) => handleStateChange(menuOpen)}
        >
          <div className="h-1/2 flex flex-col justify-between w-full">
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("about");
              }}
            >
              <img src={aboutsvg} alt="about icon" />
              <p>About Me</p>
            </div>
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("projects");
              }}
            >
              <img src={projectsvg} alt="briefcase icon" />
              <p>Works</p>
            </div>
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("resume");
              }}
            >
              <img src={skillsvg} alt="lightbulb icon" />
              <p>Resume</p>
            </div>
            <div
              className="mobile-link"
              onClick={() => {
                handleMobileNav("contact");
              }}
            >
              <img src={contactsvg} alt="connect icon" />
              <p>Contact</p>
            </div>
            {/* Resume Download */}
            <div>
              <a
                href={resume}
                download="mel-resume"
                className=" mobile-resume btn btn-primary btn-sm active text-center"
                role="button"
              >
                <p className="text-center mx-auto"> Download Resume</p>
              </a>
            </div>
          </div>

          {/* BOTTOM ICON LINKS ON NAV */}
          <div className="w-full">
            <ul className="mobile-social flex justify-evenly items-center h-1/3">
              {/* Gmail */}
              <a
                className=" hover:-translate-y-1 duration-500 rounded-full"
                href="mailto:melissa.taylor00@hotmail.com"
                target="_blank"
                rel="noreferrer"
                name="Link to create and send an email."
              >
                <img className="contactlink" src={mailsvg} alt="Mail logo." />
              </a>
              {/* Linked In */}
              <a
                className=" hover:-translate-y-1 duration-500 rounded-full"
                href="https://www.linkedin.com/in/melissa-taylor-aba356217/"
                target="_blank"
                rel="noreferrer"
                name="Link to Mel's LinkedIn"
              >
                <img
                  className="contactlink"
                  src={linkedinsvg}
                  alt="LinkedIn logo"
                />
              </a>
              {/* GitHub */}
              <a
                className=" hover:-translate-y-1 duration-500 rounded-full"
                href="https://github.com/melissataylor1"
                target="_blank"
                rel="noreferrer"
                name="Link to Mel's GitHub Profile"
              >
                <img
                  className="contactlink"
                  src={githubsvg}
                  alt="GitHub logo"
                />
              </a>
            </ul>
          </div>
        </Menu>
      </nav>
    </>
  );
}

export default Navbar;
