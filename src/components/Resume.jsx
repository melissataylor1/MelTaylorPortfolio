import React from "react";
import Education from "./partials/Experience";
import "../styles.css";
// SVG Import
import skills from "../assets/icons/skills.svg";
// Front End
import js from "../assets/icons/javascript.svg";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import jquery from "../assets/icons/jquery.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";
import illustrator from "../assets/icons/illustrator.svg";
import ae from "../assets/icons/ae.svg";
import cad from "../assets/icons/cad-icon.svg";
import dimension from "../assets/icons/dimension.svg";
import blender from "../assets/icons/blender.svg";
import hubspot from "../assets/icons/hubspot.svg";
import handlebars from "../assets/icons/handlebars.svg";

// Back End
import nodejs from "../assets/icons/nodejs.svg";
import mongodb from "../assets/icons/mongodb.svg";
import mysql from "../assets/icons/mysql.svg";
import express from "../assets/icons/express.svg";
import graphql from "../assets/icons/graphql.svg";
import heroku from "../assets/icons/heroku.svg";
import photoshop from "../assets/icons/photoshop.svg";
import jest from "../assets/icons/jest.svg";
import gitbash from "../assets/icons/git-bash.svg";
import figma from "../assets/icons/figma.svg";

//**********SKILLS */
function Resume(props) {
  return (
    <div className="w-full flex flex-col overflow-x-hidden  bg-slate-50">
      <header className="sectionheading2 md:sectionheading-md">
        <img
          className="md:block md:heading-icon pr-5 md:pr-0"
          src={skills}
          alt="User icon on a book"
        />
        <h2 className="about-title text-white">Resume</h2>
      </header>
      <div className="overflow-y-auto overflow-x-hidden">
        <div className="">
          <Education />
        </div>
        <hr className=""></hr>
        <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-indigo-600 decoration-4 pt-10 lg:pt-12 xl:pt-14 pb-3">
          Skills
        </p>
        {/* Front End Skills */}
        <div className="w-full  xl:w-5/6 2xl:w-2/3 lg:mx-auto h-full flex justify-evenly flex-wrap">
          <div className="skill-container scroll-smooth overscroll-none">
            <h2 className="ss-head xl:text-2xl lg:text-xl text-lg md:animate-slideX2 text-center">
              Front End
            </h2>
            <div className="skillsection  md:animate-slideX3">
              <div className="skill">
                <img className="skill-icon" src={html} alt="HTML5 Logo" />
                <p className="skill-name">HTML</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={css} alt="CSS3 Logo" />
                <p className="skill-name">CSS</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={js} alt="Javascript Logo" />
                <p className="skill-name">JavaScript</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={react} alt="React Logo" />
                <p className="skill-name">React</p>
              </div>
              <div className="skill">
                <img
                  className="skill-icon"
                  src={tailwind}
                  alt="Tailwind Logo"
                />
                <p className="skill-name">Tailwind</p>
              </div>
              <div className="skill">
                <img
                  className="skill-icon"
                  src={bootstrap}
                  alt="Bootstrap Logo"
                />
                <p className="skill-name">Bootstrap</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={jquery} alt="jQuery Logo" />
                <p className="skill-name">jQuery</p>
              </div>
              <div className="skill">
                <img
                  className="skill-icon"
                  src={handlebars}
                  alt="handlebars Logo"
                />
                <p className="skill-name">Handlebars.js</p>
              </div>
            </div>
          </div>

          {/* Back End Skills */}
          <div className="skill-container scroll-smooth overscroll-none">
            <h2 className="ss-head xl:text-2xl lg:text-xl text-lg md:animate-slideX2 text-center">
              Back End
            </h2>
            <div className="skillsection  md:animate-slideX3">
              <div className="skill">
                <img
                  className="skill-icon"
                  src={express}
                  alt="Express.js Logo"
                />
                <p className="skill-name">Express.js</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={nodejs} alt="Node.js Logo" />
                <p className="skill-name">Node.js</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={mysql} alt="MySQL Logo" />
                <p className="skill-name">MySQL</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={mongodb} alt="MongoDB Logo" />
                <p className="skill-name">MongoDB</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={graphql} alt="GraphQL Logo" />
                <p className="skill-name">GraphQL</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={heroku} alt="Heroku Logo" />
                <p className="skill-name">Heroku</p>
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="skill-container scroll-smooth overscroll-none">
            <h2 className="ss-head xl:text-2xl lg:text-xl text-lg md:animate-slideX2 text-center">
              Other
            </h2>
            <div className="skillsection  md:animate-slideX3">
              <div className="skill">
                <img className="skill-icon" src={gitbash} alt="Git Bash Logo" />
                <p className="skill-name">Git</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={jest} alt="Jest Logo" />
                <p className="skill-name">Jest</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={figma} alt="Figma Logo" />
                <p className="skill-name">Figma</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={hubspot} alt="hubspot" />
                <p className="skill-name">Hubspot</p>
              </div>
              <div className="skill">
                <img
                  className="skill-icon"
                  src={photoshop}
                  alt="Photoshop Logo"
                />
                <p className="skill-name">Photoshop</p>
              </div>
              <div className="skill">
                <img
                  className="skill-icon"
                  src={illustrator}
                  alt="Illustrator Logo"
                />
                <p className="skill-name">Illustrator</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={ae} alt="After Effects" />
                <p className="skill-name">After Effects</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={dimension} alt="Dimension" />
                <p className="skill-name">Dimension</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={blender} alt="Blender" />
                <p className="skill-name">Blender</p>
              </div>
              <div className="skill">
                <img className="skill-icon" src={cad} alt="CAD" />
                <p className="skill-name">CAD</p>
              </div>
              <div className="skill">
                <img
                  className="skill-icon"
                  src="https://placeholder.pics/svg/40"
                  alt=""
                />
                <p className="skill-name">UI/UX</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 border-y border-neutral-500 py-5 text-white">
          <p className=" text-center text-sm ">
            Made with ❤️ and React{" "}
            <img
              className="w-4 inline self-center"
              src={react}
              alt="User icon on a book"
            />{" "}
            <p className="italic inline">by Mel Taylor</p>
          </p>
        </div>
      </div>
    </div>
    //**********RESUME */

    // Experience
    // Education
  );
}

export default Resume;
