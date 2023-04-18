import React from "react";
import Project from "./partials/Project";
import Graphic from "./partials/Graphic";
import UX from "./partials/UX";

import projects from "../assets/icons/projects.svg";

// TODO: BUG: Small aspect change on this page only

function Projects() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden text-slate-50">
      <header className="sectionheading md:sectionheading-md ">
        <img
          className="md:block md:heading-icon pr-5 md:pr-0"
          src={projects}
          alt="User icon on a book"
        />
        <h2 className="about-title ">Projects</h2>
      </header>

      <div className="overflow-y-auto overflow-x-hidden pt-5 xl:pt-8 2xl:pt-10 self-center ">
        <div className="mb-20">
          <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-indigo-600 decoration-4  lg:pl-10  lg:pb-10  lg:text-left pt-10 pb-4 ">
            Fullstack Web Development
          </p>
          {/* Populates all of the projects in the projects array as cards.*/}
          <Project />
        </div>
        <hr className=""></hr>
        <div className="mb-10">
          <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-indigo-600 decoration-4 lg:pt-10 lg:pl-10 lg:pb-10  lg:text-left pt-10 pb-4 ">
            Graphic Design & Digital Art
          </p>
          {/* Populates all of the projects in the projects array as cards.*/}
          <Graphic />
        </div>
      </div>
    </div>
  );
}

export default Projects;
