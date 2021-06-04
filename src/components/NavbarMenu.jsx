import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavbarMenu = ( props ) => {
    const { handleMenu }  = props;
    return ( 
        <Fragment>
            <Link onClick={handleMenu} className="Navbar-link" to="/projects"><i className="fas fa-briefcase"></i> Projects</Link>
            <Link onClick={handleMenu} className="Navbar-link" to="/blog">Blog</Link>
            <Link onClick={handleMenu} className="Navbar-link"  to="/about">About</Link> 
        </Fragment>
    )
}

export default NavbarMenu;