import React from "react";
// Icons/Logos
import travelme from '../../assets/images/travel-me.png'
import zodiac from '../../assets/images/zodiac_quest.png';
import githublogo from "../../assets/icons/github.svg"

// The projects array contains project objects which are then each mapped onto a component which is added to the page.
const projects = [
    {
        title: "Zodiac Quest",
        img: zodiac,
        desc: "A social network with engagement incentives built around a simple browser platformer game .",
        link: "https://zodiacquestfinal.herokuapp.com",
        repolink: "https://github.com/jacobpostill/project-2",
    },
    {
        title: "Travel Me",
        img: travelme,
        desc: "A travel app where users can compare currency exchanges between countries while learning about the countries history and seeing images.",
        link: "https://johnxlai.github.io/travel-app/",
        repolink: "https://github.com/jjocelynn/WikiGo",
    },
   
]

function Project() {
    // For each project, map its properties onto html and add it to projectCards array.
    const projectCards = projects.map((proj) => {
        return (
            
            // The whole card will be a link
            <a href={proj.link} target='_blank' rel='noreferrer' className="project-card xl:project-card-md hover:project-card-hover xl:animate-slideX3">
                <div className="flex flex-col justify-between h-auto w-full text-slate-50">
                    {/* Image */}
                    <section className="flex justify-center pl-8 pr-8 border-b-2 border-stone-700 w-full">
                        <img className='flex pt-4 pb-4' src={proj.img} alt="Project Preview" />
                    </section>
                    {/* Name, Phase, Stack */}
                    <section className="title-bar border-b-2 border-stone-700">
                        {/* Title */}
                        <div className="flex  items-center justify-evenly p-4 border-r-2 border-stone-700">
                            <h1 className="font-heading text-xl ">{proj.title}</h1>
                        </div>
                       
                        {/* Repo Link */}
                        <div className="border-l-2 border-stone-700 p-4">
                            <a href={proj.repolink} className='flex' rel='noreferrer' target='_blank'><img src={githublogo} alt="" className="w-[25px]" /></a>
                        </div>
                    </section>
                    {/* Description */}
                    <section>
                        <section className="project-desc xl:project-desc-md">
                            <p className="text-xl">{proj.desc}</p>
                        </section>
                    </section>
                </div>
            </a>
        )
    })

    // We will return a component which contains this array of project cards.
    return (
        <div>
            <div className='project-container '>
                {projectCards}
            </div>
        </div>
    )
}

export default Project;