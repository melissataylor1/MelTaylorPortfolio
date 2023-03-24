import React from 'react';
// SVG Import
import skills from '../assets/icons/skills.svg'
// Front End
import js from '../assets/icons/javascript.svg'
import css from "../assets/icons/css.svg"
import html from "../assets/icons/html.svg"
import bootstrap from "../assets/icons/bootstrap.svg"
import jquery from "../assets/icons/jquery.svg"
import react from "../assets/icons/react.svg"
import tailwind from "../assets/icons/tailwind.svg"
// Back End
import nodejs from "../assets/icons/nodejs.svg"
import mongodb from "../assets/icons/mongodb.svg"
import mysql from "../assets/icons/mysql.svg"
import express from "../assets/icons/express.svg"
import graphql from "../assets/icons/graphql.svg"
import heroku from "../assets/icons/heroku.svg"
import photoshop from "../assets/icons/photoshop.svg"
import jest from "../assets/icons/jest.svg"
import gitbash from "../assets/icons/git-bash.svg"
import figma from "../assets/icons/figma.svg"


//**********SKILLS */
function Skills(props) {
    return (
        <div className='md:w-auto flex flex-col justify-top items-center'>
            <header className='sectionheading md:sectionheading-md'>
                <img src={skills} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>Skills</h2>
            </header>
          
                   

 {/* Front End Skills */}
 <div className='w-full h-full flex justify-evenly flex-wrap'>
                <div className='skill-container'>
 <h2 className='ss-head  md:animate-slideX2'>Front End</h2>
 <div className='skillsection  md:animate-slideX3'>
     <div className='skill'>
         <img className='skill-icon' src={html} alt="HTML5 Logo" />
         <p className='skill-name'>HTML</p>
     </div>
     <div className='skill'>
         <img className='skill-icon' src={css} alt="CSS3 Logo" />
         <p className='skill-name'>CSS</p>
     </div>
     <div className='skill'>
         <img className='skill-icon' src={js} alt="Javascript Logo" />
         <p className='skill-name'>JavaScript</p>
     </div>
     <div className='skill'>
         <img className='skill-icon' src={react} alt="React Logo" />
         <p className='skill-name'>React</p>
     </div>
     <div className='skill'>
         <img className='skill-icon' src={tailwind} alt="Tailwind Logo" />
         <p className='skill-name'>Tailwind</p>
     </div>
     <div className='skill'>
         <img className='skill-icon' src={bootstrap} alt="Bootstrap Logo" />
         <p className='skill-name'>Bootstrap</p>
     </div>
     <div className='skill'>
         <img className='skill-icon' src={jquery} alt="jQuery Logo" />
         <p className='skill-name'>jQuery</p>
     </div>
 </div>
</div>

                    {/* Back End Skills */}
                    <div className='skill-container'>
                    <h2 className='ss-head  md:animate-slideX2'>Back End</h2>
                    <div className='skillsection  md:animate-slideX3'>
                        <div className='skill'>
                            <img className='skill-icon' src={express} alt="Express.js Logo" />
                            <p className='skill-name'>Express.js</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={nodejs} alt="Node.js Logo" />
                            <p className='skill-name'>Node.js</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={mysql} alt="MySQL Logo" />
                            <p className='skill-name'>MySQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={mongodb} alt="MongoDB Logo" />
                            <p className='skill-name'>MongoDB</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={graphql} alt="GraphQL Logo" />
                            <p className='skill-name'>GraphQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={heroku} alt="Heroku Logo" />
                            <p className='skill-name'>Heroku</p>
                        </div>
                    </div>
                </div>
// Other
   {/* Additional Skills */}
   <div className='skill-container'>
                   
                   <h2 className='ss-head  md:animate-slideX2'>Plus</h2>
                   <div className='skillsection  md:animate-slideX3'>
                       
                       <div className='skill'>
                           <img className='skill-icon' src={gitbash} alt="Git Bash Logo" />
                           <p className='skill-name'>Git</p>
                       </div>
                       <div className='skill'>
                           <img className='skill-icon' src={jest} alt="Jest Logo" />
                           <p className='skill-name'>Jest</p>
                       </div>
                       <div className='skill'>
                           <img className='skill-icon' src={figma} alt="Figma Logo" />
                           <p className='skill-name'>Figma</p>
                       </div>
                       <div className='skill'>
                           <img className='skill-icon' src={photoshop} alt="Photoshop Logo" />
                           <p className='skill-name'>Photoshop</p>
                       </div>
                       <div className='skill'>
                           <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                           <p className='skill-name'>UI/UX</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
//**********RESUME */

// Experience
// Education




              
    )
}

export default Skills;