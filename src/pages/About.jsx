import React from 'react';
// components
import Contact from '../components/Contact';
// styles
import './styles/About.css';

const About = ( ) => {
    return (
        <div className="About">
            <Contact /> 
            <h1>This website was developed with the following tools:</h1>
            <div className="About-list">
                <i className="devicon-react-original-wordmark" /> 
                <i className="devicon-webpack-plain" /> 
                <i className="devicon-firebase-plain-wordmark" /> 
            </div>
            <h1>
                Code repository
            </h1>
            <a className="About-link" href="https://github.com/cubomx/me" target="_blank">
                <i className="devicon-github-original-wordmark"></i>
            </a>
        </div>
        
    )
}

export default About;