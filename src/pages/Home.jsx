import React from 'react';
// styles
import './styles/Home.css';
// files
import Profile from '../images/me.jpg';

const Home = ( ) => {
    return (
        <div className="Home">
            <img src={Profile} alt="Profile"/>
            <div>
                <p className="Home-title">Frontend & Backend Developer</p>
                <div className="Home-info">
                    Hi, my name is Sergio Velázquez.
                </div>
            </div>
            
        </div>
        
    )
}

export default Home;