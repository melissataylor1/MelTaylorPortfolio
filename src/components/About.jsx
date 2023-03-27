import React from "react";
import headshot from '../assets/images/heart.png'
import aboutme from '../assets/icons/about.svg'
import "../styles.css";
/*PROPS FOR THIS PAGE
function About() {
    return <Greeting name="Mel"  />;
  } */

function About(props) {
    return (
        <div className='md:w-full flex flex-col overflow-x-hidden text-slate-50'>
            <header className='sectionheading md:sectionheading-md'>
                <img className='md:block md:heading-icon ' src={aboutme} alt="User icon on a book"  />
                <h2 className='about-title'>About Me</h2>
            </header>
            <div className='flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden'>
                <div  id="about-section " className='flex flex-col-reverse md:flex-row justify-evenly items-center  w-4/5 mt-20 mb-10'>
                    <div className='flex flex-col justify-evenly md:items-start h-full'>
                        <h1 id='about-name' className=' text-left text-6xl lg:text-5xl xl:text-7xl m-10 md:m-0'>Melissa Taylor</h1>
                 
                        <h2 className='md:text-3xl text-xl font-heading mt-0 '>Full Stack Web Developer & Designer</h2>
                    </div>
                    <div className='w-2/3 md:w-1/4 flex justify-around '>
                      
                        <img className='w-2/3 md:w-full my-0 mx-auto' src={headshot} alt="MEl Taylor" />
                    </div>
                </div>
    
                <div id="about-desc" className='text-center xl:w-2/5 w-4/5 mt-150 mb-20'>
                    <p className='text-left text-lg md:text-xl w-full font-extralight'>
                    Welcome to my portfolio! 👋 <br /> <br/> My name is Melissa and I am a full stack web developer and designer. 
                    <br /><br />
                    With diverse experience in both design and technical development, I focus on creating effective and engaging user experiences across all media platforms.
                    <br /><br />
                    Thanks for checking me out 🎉
                    </p>
                    <br />
                    <br />
                    <p className='italic mt-10'>Last Updated: 1/31/2023</p>
                </div>
            </div>
        </div>
    )
}

export default About;
