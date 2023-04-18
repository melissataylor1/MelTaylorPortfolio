import React from "react";
import headshot from "../assets/images/heart.png";
import aboutme from "../assets/icons/about.svg";
import "../styles.css";
/*PROPS FOR THIS PAGE
function About() {
    return <Greeting name="Mel"  />;
  } */

function About(props) {
  return (
    <div className="w-full flex flex-col overflow-x-hidden text-slate-50">
      <header className="sectionheading md:sectionheading-md ">
        <img
          className="md:block md:heading-icon pr-5 md:pr-0"
          src={aboutme}
          alt="User icon on a book"
        />
        <h2 className="about-title ">About Me</h2>
      </header>

      <div className="overflow-y-auto overflow-x-hidden pt-10 md:pt-14 xl:pt-20 self-center ">
        <div className="md:grid md:grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 md:gap-5 w-11/12  lg:px-0 md:mb-10 lg:w-3/4 xl:w-3/5 mx-auto md:items-center">
          <div className="w-2/5 md:w-full md:justify-item-start pb-5 md:pb-0 md:col-span-2 md:self-center mx-auto">
            <img className="" src={headshot} alt="MEl Taylor" />
          </div>

          <div className="mx-auto text-center md:col-span-4 lg:col-span-6 md:col-start-3 md:text-left md:justify-self-start lg:w-full xl:ml-5 2xl:ml-8">
            <h1
              id="about-name"
              className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pb-3 h-20"
            >
              Melissa Taylor
            </h1>

            <h2 className="font-light  lg:text-xl xl:text-2xl 2xl:text-3xl text-lg xl:mt-5">
              Full Stack Web Developer & Designer
            </h2>
          </div>
        </div>

        <div className="">
          <hr className="bg-white md:hidden w-4/5 flex mx-auto my-8"></hr>

          <div className="flex w-11/12 lg:w-3/4 xl:w-3/5 mx-auto ">
            <p className="md:text-left text-center font-extralight md:text-md md:leading-loose lg:text-lg xl:text-xl lg:leading-loose 2xl:text-2xl xl:leading-loose 2xl:leading-loose   text-md mx-auto">
              Welcome to my portfolio! 👋
              <br />
              <br />
              I'm a skilled front-end web developer with a passion for web
              design. With over 4 years of experience, I've created engaging and
              intuitive web experiences for users across diverse industries. My
              expertise in HTML, CSS, JavaScript, and related technologies
              enable me to create visually appealing and user-friendly websites.
              <br /> <br />
              Recently, I have added back-end development to my skill set,
              becoming a proficient Full-Stack Developer. My knowledge of
              Node.js, Express, React, and MongoDB allows me to bring my designs
              to life and create complex web applications.
              <br />
              <br />
              Thanks for checking me out 🎉
            </p>
            <br />
            <br />
          </div>
          <p className="text-center italic text-sm mt-8 sm:mt-16 lg:mt-24">
            Last Updated: 4/13/2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
