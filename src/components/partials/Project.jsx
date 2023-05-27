import React from "react";
import Stack from "./Stack";
// Icons/Logos
import travelme from "../../assets/images/travel-me.png";
import zodiac from "../../assets/images/zodiac_quest.png";
import ghlogo from "../../assets/icons/github.svg";
import streamline from "../../assets/images/streamline.png";
import axis from "../../assets/images/axis.png";
import techblog from "../../assets/images/techblog.png";
import notetaker from "../../assets/images/notetaker.png";
import scheduler from "../../assets/images/scheduler.png";

// The projects array contains project objects which are then each mapped onto a component which is added to the page.
const projects = [
  {
    title: "Axis LTD",
    img: axis,
    desc: "A livestream platform that hosts creator streams - with integrated ticketing",
    stack: ["Next", "Tailwind", "Node", "React"],
    link: "https://axis-mu.vercel.app/",
    repolink: "https://github.com/melissataylor1/Axis",
  },
  {
    title: "Streamline",
    img: streamline,
    desc: "A livestream platform that hosts creator streams - with integrated ticketing",
    stack: ["React", "Tailwind", "Express", "Mongo", "Node", "GraphQL"],
    link: "https://livestream-tickets.herokuapp.com/",
    repolink: "https://github.com/tadcos29/team-8-project-3",
  },
  {
    title: "Zodiac Quest",
    img: zodiac,
    desc: "A social network with engagement incentives built around a simple browser platformer game .",
    stack: ["Handlebars", "Tailwind", "Express", "Node", "SQL", "Bootstrap"],
    link: "https://zodiacquestfinal.herokuapp.com",
    repolink: "https://github.com/jacobpostill/project-2",
  },
  {
    title: "Travel Me",
    img: travelme,
    desc: "A travel app where users can compare currency exchanges between countries while learning about the countries history and seeing images.",
    stack: ["Tailwind", "JavaScript", "HTML", "CSS"],
    link: "https://johnxlai.github.io/travel-app/",
    repolink: "https://github.com/johnxlai/travel-app",
  },
  {
    title: "Byte-Sized",
    img: techblog,
    desc: "A tech blog where people can create accounts, make & view posts, and comment on the posts of others",
    stack: ["JavaScript", "Handlebars", "HTML", "CSS"],
    link: "https://github.com/melissataylor1/ByteSized-TechBlog",
    repolink: "https://bytesizedtechblog.herokuapp.com",
  },
  {
    title: "Daily Scheduler ",
    img: scheduler,
    desc: "A daily scheduler where people can save memos and see what time of the day it is",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/melissataylor1/API_Daily_Agenda",
    repolink: "https://melissataylor1.github.io/API_Daily_Agenda/",
  },
  {
    title: "Note Taker",
    img: notetaker,
    desc: "A note taking app that saves your notes in the browser",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/melissataylor1/NoteTaker2000",
    repolink: "https://tranquil-bastion-67033.herokuapp.com/notes",
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
