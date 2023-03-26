import React from "react";
import Project from "./partials/Project";
import projectlogo from '../assets/icons/projects.svg'
import "../styles.css";

// Project array that contains the title, image, app link, and repo link for each project.
const projects = [
  {
    title: "Zodiac Quest",
    image: "https://github.com/melissataylor1/MelTaylor_WebDev_Portfolio/blob/main/assets/images/zodiac_quest.png",
    appLink: "https://zodiacquestfinal.herokuapp.com",
    repoLink: "https://github.com/jacobpostill/project-2",
  },
  {
    title: "Travel Me ",
    image: "https://github.com/johnxlai/my-portfolio/blob/main/assets/img/folio/travel-me.png",
    appLink: "https://johnxlai.github.io/travel-app/",
    repoLink: "https://github.com/jjocelynn/WikiGo",
  }

];


// Portfolio section that links the projects array to the Project component.
const Portfolio = () => {
  return (
    <div className='md:w-full flex flex-col overflow-x-hidden text-slate-50'>
    <section className="portfolio">



    {/* Section Heading */}
    <header className='sectionheading md:sectionheading-md'>
        <img src={projectlogo} alt="Briefcase" className='hidden md:block md:heading-icon' />
        <h2 className=''>Portfolio</h2>
    </header>
  
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            appLink={project.appLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Portfolio;