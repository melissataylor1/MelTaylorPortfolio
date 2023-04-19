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

      <div className="overflow-y-auto overflow-x-hidden pt-5 xl:pt-8  self-center ">
        <div className="mb-20 ">
          <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-sky-300 decoration-4  lg:pl-10  lg:pb-10  lg:text-left pt-5 pb-8 ">
            Fullstack Web Development
          </p>
          {/* Populates all of the projects in the projects array as cards.*/}
          <Project />
        </div>
        <hr className=""></hr>
        <div className="xl:grid xl:grid-cols-2">
          <div className="mb-20 mx-auto">
            <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-sky-300 decoration-4 xl:pt-10 xl:pl-10 xl:pb-10  xl:text-left pt-10 pb-4 xl:col-span-1 mx-auto">
              Graphic Design & Digital Art
            </p>
            {/* Populates all of the projects in the projects array as cards.*/}
            <Graphic />
          </div>
          <div className="mb-20">
            <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-sky-300 decoration-4 xl:pt-10 lg:pl-10 xl:pb-10  xl:text-left pt-10 pb-4 xl:col-span-1">
              UX/UI Design
            </p>
            {/* Populates all of the projects in the projects array as cards.*/}
            <UX />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
