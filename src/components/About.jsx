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
        <div className='w-full flex flex-col overflow-x-hidden text-slate-50'>
            <header className='sectionheading md:sectionheading-md '>
                <img className='md:block md:heading-icon pr-5 md:pr-0' src={aboutme} alt="User icon on a book"  />
                <h2 className='about-title '>About Me</h2>
            </header>
            
            <div className='overflow-y-auto overflow-x-hidden mt-10'>
                <div  id="about-section" className=''>
                <div className='w-1/2  mx-auto pb-5'>
                      
                      <img className='' src={headshot} alt="MEl Taylor" />
                  </div>
                  
                    <div className='mx-auto text-center '>
                        <h1 id='about-name' className='text-4xl pb-3 h-20'>Melissa Taylor</h1>
                 
                        <h2 className='font-light text-center text-lg'>Full Stack Web Developer & Designer</h2>
                    </div>
               
                </div>
    
               
                <div className=''>
                <hr className='bg-white w-4/5 flex mx-auto my-8'></hr>

                <div className='flex w-11/12 mx-auto'>
                    <p className=' text-center font-extralight text-md mx-auto'>
                    Welcome to my portfolio! 👋 <br /> <br/> My name is Melissa and I am a full stack web developer and designer. 
                    <br /><br />
                    With diverse experience in both design and technical development, I focus on creating effective and engaging user experiences across all media platforms.
                    <br /><br />
                    Thanks for checking me out 🎉
                    </p>
                    <br />
                    <br />
                    </div>
                    <p className='text-center italic text-sm mt-8'>Last Updated: 1/31/2023</p>
                    
                </div>
            </div>
         
        </div>
    )
}

export default About;
