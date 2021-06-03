import React, { Fragment } from 'react';
// styles
import './styles/NotFound.css';

const NotFound = ( ) => {
    return (
        <div className="NotFound">
            <i className="fas fa-exclamation-circle fa-7x"></i>
            <p className="NotFound-title">Oops!</p>
            <p className="NotFound-message">For your bad luck, this page doesn't exists :(</p>
        </div>
    )
}

export default NotFound;