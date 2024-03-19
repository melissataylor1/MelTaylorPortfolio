import React, { useState } from "react";
import Project from "./partials/Project";
import react from "../assets/icons/react.svg";
import Graphic from "./partials/Graphic";
import UX from "./partials/UX";
import projects from "../assets/icons/projects.svg";

function Projects() {
  const [showProjects, setShowProjects] = useState(true);
  const [showGraphicDesign, setShowGraphicDesign] = useState(false);
  const [showUX, setShowUX] = useState(false);

  const showProjectsSection = () => {
    setShowProjects(true);
    setShowGraphicDesign(false);
    setShowUX(false);
  };

  const showGraphicDesignSection = () => {
    setShowProjects(false);
    setShowGraphicDesign(true);
    setShowUX(false);
  };

  const showUXSection = () => {
    setShowProjects(false);
    setShowGraphicDesign(false);
    setShowUX(true);
  };

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
        <div className={showProjects ? "" : "hidden"}>
          <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-sky-300 decoration-4  lg:pl-10  lg:pb-10  lg:text-left pt-5 pb-8 ">
            Fullstack Web Development & Web Design
          </p>
          {/* Populates all of the projects in the projects array as cards.*/}
          <Project />
        </div>

        <div className="xl:grid xl:grid-cols-2">
          <div className={showGraphicDesign ? "" : "hidden"}>
            <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-sky-300 decoration-4 xl:pt-10 xl:pl-10 xl:pb-10  xl:text-left pt-10 pb-4 xl:col-span-1 mx-auto">
              Graphic Design & Digital Art
            </p>
            {/* Populates all of the projects in the projects array as cards.*/}
            <Graphic />
          </div>
          <div className={showUX ? "" : "hidden"}>
            <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-sky-300 decoration-4 xl:pt-10 lg:pl-10 xl:pb-10  xl:text-left pt-10 pb-4 xl:col-span-1">
              Other UX/UI Design Examples
            </p>
            {/* Populates all of the projects in the projects array as cards.*/}
            <UX />
          </div>
        </div>

        <div className="bg-neutral-900 border-y border-neutral-500 py-5 ">
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

      <div className="flex justify-center mt-5">
        <button onClick={showProjectsSection} className="mx-2">
          Projects
        </button>
        <button onClick={showGraphicDesignSection} className="mx-2">
          Graphic Design
        </button>
        <button onClick={showUXSection} className="mx-2">
          UX/UI Design
        </button>
      </div>
    </div>
  );
}

export default Projects;
