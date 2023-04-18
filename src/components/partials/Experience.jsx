import React from "react";

const education = [
  {
    school: "University of Toronto",
    degree: "Full Stack Web Development - Certificate of Completion",
    graduated: "April 2023",
    description:
      "This curriculum covered front-end development, back-end development, database design, web servers, APIs, Git/Github, and deployment. The course involved a combination of lectures, hands-on projects, individual and group assignments, and culminated with the ability to build and deploy production-ready web applications.",
  },
  {
    school: "Toronto Metropolitan University",
    school2: "formerly Ryerson University",
    degree: "B.A. - Media Production",
    graduated: "August 2021",
    description:
      "Named one of the top 15 international media schools by the Hollywood Reporter, this program taught me fundementals of audience engagement and storytelling. Throughout my 4 years in this program, my studies were rooted in interaction design and media theory, programming and robotics, video and sound production, art history, and digital fabrication. ",
  },
];

const work = [
  {
    company: "Self-Employed",
    title: "Freelance Digital Designer",
    years: "2018 - now",
    description:
      "Deliverabes include: Marketing and promotional material (print, digital, video, and 3D), graphic design + motion graphic design, copywriting, podcast & video production, UX/UI consulting, and web design.",
    description2:
      "Clients include: small businesses, financial service companies, radio stations, media companies, musicians, and startups",
  },
  {
    company: "Optimize Wealth Management",
    title: "Senior Marketing Specialist",
    years: "October 2021 - July 2022",
    description:
      "Using UX/UI concepts and front-end coding, I designed and created the company's public website and internal web portal, as well as various interactive investor service tools integrating the Hubspot CRM. Additionally, I created graphic and motion assets, 3D mockups, edited videos, and wrote copy for the company's social media and websites - frequently collaborating with the CEO to shape brand strategy and define user requirements. During my tenure, I created and oversaw the development of various marketing campaigns which lead to substantial business growth.",
  },
  {
    company: "Dr. Roozbeh Manshaei",
    company3: "Senior Bio-Informatician, Ted Rogers Cardiac Genome Clinic ",
    title: "UX Assistant",
    years: "January 2021 - June 2021",
    description:
      "Utilized Blender, Fusion 360 and Unreal Game Engine to design and execute, from thousands of 2D data points, a 3D user experience which allows users enhanced and more eﬀective data visualization and manipulation capability. ",
  },
];

function Education() {
  // For each project, map its properties onto html and add it to projectCards array.
  // TODO: Drop down for description on project cards.
  const educationSection = education.map((proj, index) => {
    return (
      <div className="w-11/12 lg:w-full mx-auto justify py-5">
        {/* company */}

        <div className="text-center lg:text-left">
          <h1 className="resume-title text-2xl xl:text-3xl mb-1 text-zinc-800">
            {proj.school}
          </h1>
          <h1 className="resume-title text-sm xl:text-lg text-zinc-800">
            {proj.school2}
          </h1>
        </div>

        {/* title */}

        <div className="text-center my-2 lg:text-left text-zinc-600">
          <span className="text-lg xl:text-xl resume-position">
            {proj.degree}
          </span>{" "}
          <span>•</span>
          <em className=" not-italic text-center font-extralight xl:text-lg text-zinc-600">
            {" "}
            {proj.graduated}
          </em>
        </div>
        {/* Description */}

        <div className="text-center lg:text-left text-zinc-500">
          <p className="font-light text-md xl:text-lg leading-7 xl:leading-8 justify ">
            {proj.description}
          </p>
        </div>
      </div>
    );
  });

  const workSection = work.map((proj, index) => {
    return (
      <div className="w-11/12 lg:w-full mx-auto justify py-5">
        {/* company */}

        <div className="text-center lg:text-left">
          <h1 className="resume-title text-2xl mb-1 xl:text-3xl text-zinc-800">
            {proj.company}
          </h1>
          <h1 className="resume-title text-sm xl:text-lg text-zinc-800">
            {proj.company3}
          </h1>
        </div>

        {/* title */}

        <div className="text-center my-2 lg:text-left">
          <span className="text-lg xl:text-xl resume-position text-zinc-600">
            {proj.title}
          </span>{" "}
          <span>•</span>
          <em className=" not-italic text-center font-extralight xl:text-lg text-zinc-600">
            {" "}
            {proj.years}
          </em>
        </div>
        {/* Description */}

        <div className="text-center lg:text-left">
          <p className="font-light text-md xl:text-lg xl:leading-8 leading-7 justify text-zinc-500">
            {proj.description}
          </p>
          <p className="font-light text-sm xl:text-lg italic mt-2 text-zinc-500">
            {proj.description2}
          </p>
        </div>
      </div>
    );
  });

  // We will return a component which contains this array of project cards.
  return (
    <div>
      <div className=" lg:grid lg:grid-cols-9 lg:mx-auto lg:w-5/6 xl:w-2/3 2xl:w-1/2 lg:pt-12 xl:pt-16 ">
        <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-indigo-600 decoration-4 lg:col-span-2 lg:pt-5  lg:text-left pt-10 pb-4 ">
          Education
        </p>
        <div className="lg:col-span-7 pb-5">{educationSection}</div>
      </div>
      <hr className=""></hr>
      <div className=" lg:grid lg:grid-cols-9 lg:mx-auto lg:w-5/6 xl:w-2/3 2xl:w-1/2 lg:pt-10">
        <p className="chapter uppercase font-black tracking-widest text-center text-md xl:text-lg underline underline-offset-8 decoration-indigo-600 decoration-4 lg:col-span-2 lg:pt-5 lg:text-left pt-10 pb-4">
          Work
        </p>
        <div className="lg:col-span-7 pb-5"> {workSection}</div>
      </div>
    </div>
  );
}

export default Education;
