import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './styles/Navbar.css';

const Navbar = ( ) => {
    return (
        <div className="Navbar">
            <Link to="/" className="Navbar-title">Sergio Velázquez</Link>
            <Link to="/"><i className="fas fa-home"></i> Home</Link>
            <Link to="/blog">Blog</Link>
            <Link  to="/about">About</Link>
        </div>
        
    )
}

export default Navbar;