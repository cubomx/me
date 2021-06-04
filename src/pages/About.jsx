import React from 'react';
// styles
import './styles/About.css';

const About = ( ) => {
    return (
        <div className="About">
            <h1>This website was developed with the following tools:</h1>
            <div className="About-list">
                <i className="devicon-react-original-wordmark" /> 
                <i className="devicon-webpack-plain" /> 
                <i className="devicon-firebase-plain-wordmark" /> 
            </div>
        </div>
        
    )
}

export default About;