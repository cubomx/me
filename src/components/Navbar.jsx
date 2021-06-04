import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// styles
import './styles/Navbar.css';
// hooks
import { useDetectClickOutside } from 'react-detect-click-outside';
// components
import NavbarMenu from './NavbarMenu.jsx';

const Navbar = ( ) => {
   const [isOpen, setIsOpen] = useState( false );
    const closeMenu = ( ) => {
            setIsOpen( false );
    }


    const ref = useDetectClickOutside( { onTriggered: closeMenu});
    return (
        <div className="Navbar">
            <Link to="/" className="Navbar-title">Sergio Velázquez</Link>
            <div className="Navbar-links">
                <NavbarMenu />
            </div>
            <div className="Navbar-menu" ref={ref}>
                <div className="Navbar-menu-Btn" onClick={ ( ) => { setIsOpen( !isOpen )}} >
                    <i className="fas fa-bars " />
                </div>
                { isOpen && 
                <div className="Navbar-menu-container" > 
                    <NavbarMenu handleMenu={closeMenu} />
                </div>}
            </div>
        </div>
    )
}

export default Navbar;