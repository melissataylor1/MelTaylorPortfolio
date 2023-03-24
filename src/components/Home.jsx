import React from 'react';

import About from "./About";
import Projects from "./Works";
import Contact from "./Contact";
import Resume from "./Resume";
import '../styles.css'


// This component is checking for the view state set by the nav bar and rendering the appropriate content.

function Home(props) {
    switch (props.view) {
        case "about":
            return (
                <About />
            )
        case "projects":
            return (
                <Projects />
            )
        case "resume":
            return (
                <Resume />
            )
        case "contact":
            return (
                <Contact />
            )
            default: 
            return (
                <About />
            )
    }
}

export default Home;
