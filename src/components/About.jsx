import React from "react";
import headshot from '../assets/images/heart.png'
import aboutme from '../assets/icons/about.svg'
import "../styles.css";


function About(props) {
    return (
        <div className='flex flex-col justify-top items-center md:w-auto'>
            <header className='sectionheading md:sectionheading-md'>
                <img src={aboutme} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>About Me</h2>
            </header>
            <div className='flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden'>
                <div className='flex flex-col-reverse md:flex-row justify-evenly items-center mt-20'>
                    <div className='flex flex-col justify-evenly items-center md:items-start h-full'>
                        <h1 className='md:text-6xl text-5xl font-display m-10 md:m-0 md:animate-slideXL2'>Melissa Taylor</h1>
                 
                        <h2 className='md:text-3xl text-2xl font-heading md:animate-slideXL3'>Full Stack Web Developer & Designer</h2>
                    </div>
                    <div className='w-2/3 md:w-1/4 flex justify-around md:animate-slideX3'>
                      
                        <img className='w-full rounded-full my-0 mx-auto' src={headshot} alt="MEl Taylor" />
                    </div>
                </div>
                <div className='w-2/3 mt-20 mb-20 md:animate-slideX4'>
                    <p className='text-left text-lg md:text-2xl w-full font-main'>
                    <span className='text-3xl text-highlight'>Hello!</span> Welcome to my portfolio! 👋 <br/> My name is Melissa and I am a full stack web developer and designer. 
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