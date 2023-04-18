import React from "react";
import Stack from "./Stack";
// Icons/Logos
import travelme from "../../assets/images/travel-me.png";
import zodiac from "../../assets/images/zodiac_quest.png";
import ghlogo from "../../assets/icons/github.svg";
import streamline from "../../assets/images/streamline.png";

// The projects array contains project objects which are then each mapped onto a component which is added to the page.
const projects = [
  {
    title: "Streamline",
    img: streamline,
    desc: "A livestream platform that hosts creator streams - with integrated ticketing",
    stack: ["React", "Tailwind", "Express", "Mongo"],
    link: "https://livestream-tickets.herokuapp.com/",
    repolink: "https://github.com/tadcos29/team-8-project-3",
  },
  {
    title: "Zodiac Quest",
    img: zodiac,
    desc: "A social network with engagement incentives built around a simple browser platformer game .",
    stack: ["React", "Tailwind", "Express", "SQL"],
    link: "https://zodiacquestfinal.herokuapp.com",
    repolink: "https://github.com/jacobpostill/project-2",
  },
  {
    title: "Travel Me",
    img: travelme,
    desc: "A travel app where users can compare currency exchanges between countries while learning about the countries history and seeing images.",
    stack: ["React", "Tailwind", "Express", "SQL"],
    link: "https://johnxlai.github.io/travel-app/",
    repolink: "https://github.com/johnxlai/travel-app",
  },
];

function Project() {
  // For each project, map its properties onto html and add it to projectCards array.
  // TODO: Drop down for description on project cards.
  const projectCards = projects.map((proj, index) => {
    return (
      // The whole card will be a link
      <a
        href={proj.link}
        target="_blank"
        rel="noreferrer"
        className="hover:project-card-hover shadow-lg shadow-black bg-zinc-800 space-evenly rounded-md"
      >
        {/* Image */}

        <img className="object-fit p-5" src={proj.img} alt="Project Preview" />

        {/* Name, Phase, Stack */}
        <section className="title-bar border-b-2 border-stone-700">
          {/* Title */}
          <div className="p-4 border-r-2 border-stone-700 xl:p-5">
            <h1
              id="proj-name"
              className="font-heading text-2xl  lg:text-xl xl:text-2xl 2xl:text-3xl font-bold "
            >
              {proj.title}
            </h1>
          </div>
          {/* Stack */}
          <div className="sm:p-4 p-1 self-center lg:p-1 xl:p-4">
            <Stack stack={proj.stack} />
          </div>
          {/* Repo Link */}
          <div className="border-l-2 border-stone-700 p-4 self-center">
            <a
              href={proj.repolink}
              className="flex"
              rel="noreferrer"
              target="_blank"
            >
              <img src={ghlogo} alt="" className="w-[25px]" />
            </a>
          </div>
        </section>
        {/* Description */}

        <section className=" p-5">
          <p className="text-md align-middle">{proj.desc}</p>
        </section>

        {/* View */}
      </a>
    );
  });

  // We will return a component which contains this array of project cards.
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-y-5 md:gap-y-8 lg:gap-5 xl:gap-10 w-11/12 mx-auto grid-cols-1 ">
        {projectCards}
      </div>
    </div>
  );
}

export default Project;
