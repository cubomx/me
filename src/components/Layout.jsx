import React, { Fragment } from 'react';
// components
import Navbar from './Navbar.jsx';
// styles
import './styles/Layout.css';

const Layout = ( props ) => {
    return (
        <Fragment>
            <Navbar />
            <div className="Layout-content">
            { props.children}
            </div>
        </Fragment>
        
    )
}

export default Layout;