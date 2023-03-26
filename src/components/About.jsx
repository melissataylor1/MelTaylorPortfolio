import React from "react";
import headshot from '../assets/images/heart.png'
import aboutme from '../assets/icons/about.svg'
import "../styles.css";
//ABOUT PROPS
function About() {
    return <Greeting name="Nathan" age={27} occupation="Software Developer" />;
  }

function Greeting(props) {
    return (
        <div className='md:w-full flex flex-col overflow-x-hidden text-slate-50'>
            <header className='sectionheading md:sectionheading-md'>
                <img className='md:block md:heading-icon md:animate-slideX' src={aboutme} alt="User icon on a book"  />
                <h2 className='md:animate-slideX2'>About Me</h2>
            </header>
            <div className='flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden'>
                <div className='flex flex-col-reverse md:flex-row justify-evenly items-center mt-20'>
                    <div className='flex flex-col justify-evenly items-center md:items-start h-full'>
                        <h1 className='md:text-6xl text-5xl font-bold font-display m-10 md:m-0 md:animate-slideXL2'>{props.name}</h1>
                 
                        <h2 className='md:text-3xl text-2xl font-heading md:animate-slideXL3'>Full Stack Web Developer & Designer</h2>
                    </div>
                    <div className='w-2/3 md:w-1/4 flex justify-around md:animate-slideX3'>
                      
                        <img className='w-full  my-0 mx-auto' src={headshot} alt="MEl Taylor" />
                    </div>
                </div>
                <div className='w-2/3 mt-20 mb-20 md:animate-slideX4'>
                    <p className='text-left text-lg md:text-2xl w-full font-main font-extralight'>
                    Welcome to my portfolio! 👋 <br /> <br/> My name is Melissa and I am a full stack web developer and designer. 
                    <br /><br />
                    With diverse experience in both design and technical development, I focus on creating effective and engaging user experiences across all media platforms.
                    <br /><br />
                    Thanks for checking me out 🎉
                    </p>
                    <br />
                    <br />
                    <p className='italic'>Last Updated: 1/31/2023</p>
                </div>
            </div>
        </div>
    )
}

export default About;
