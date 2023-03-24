import React from "react";
import Project from "./partials/Project";
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
    <section className="portfolio">
      <h2 className="text-center">Portfolio</h2>
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
  );
};

export default Portfolio;