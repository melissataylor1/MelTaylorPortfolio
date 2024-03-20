// Import React
import React from "react";
import Navbar from "./Nav";
import headshot from "../assets/images/heart.png";
import resume from "../assets/24_02MelissaTaylorResume.pdf";
// SVG Import
import linkedinsvg from "../assets/icons/linkedin.svg";
import githubsvg from "../assets/icons/github.svg";
import mailsvg from "../assets/icons/mail.svg";
//background

// The sidebar is on every page
function Header(props) {
  return (
    <header
      id="background"
      className="flex my-0 w-5/6 h-16 md:h-auto md:flex-col justify-between md:w-56 md:min-w-[12rem] lg:w-64 lg:min-w-[14rem] 2xl:min-w-[16rem] md:header-border md:p-5 md:pt-10"
    >
      {/* Namep*/}
      <section className="flex justify-evenly items-center md:mb-10 md:w-full">
        <img
          className=" w-1/4 hidden md:block"
          src={headshot}
          alt="Melissa Taylor"
        />
        <h1 className=" text-center text-xl md:text-lg xl:text-xl text-slate-50 font-display font-semibold tracking-wide ml-4">
          Mel Taylor
        </h1>
      </section>
      {/* Navbar */}
      <Navbar view={props.view} setView={props.setView} />
      {/* Resume Download */}
      <a
        className="border border-slate-50 text-slate-50 p-3 font-bold text-sm rounded w-2/3 mx-auto my-0 text-center mt-20 hidden transition-all duration-500  md:block hover:resumehover"
        href={resume}
        download="mel-resume"
      >
        Download Resume
      </a>

      {/* Contact Links */}
      <ul className="footer-links hidden w-full md:flex justify-evenly items-center">
        {/* Gmail */}
        <a
          className="transition-transform-colors hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full"
          href="mailto:meltee@live.com"
          target="_blank"
          rel="noreferrer"
          name="Link to create and send an email."
        >
          <img className="contactlink" src={mailsvg} alt="Mail logo" />
        </a>
        {/* Linked In */}
        <a
          className="transition-transform-colors hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full"
          href="https://www.linkedin.com/in/melissa-taylor-aba356217/"
          target="_blank"
          rel="noreferrer"
          name="Link to Mel's LinkedIn"
        >
          <img className="contactlink" src={linkedinsvg} alt="LinkedIn logo" />
        </a>
        {/* GitHub */}
        <a
          className="transition-transform-colors hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full"
          href="https://github.com/melissataylor1"
          target="_blank"
          rel="noreferrer"
          name="Link to Mel's GitHub Profile"
        >
          <img className="contactlink" src={githubsvg} alt="GitHub logo" />
        </a>
      </ul>
    </header>
  );
}

export default Header;
