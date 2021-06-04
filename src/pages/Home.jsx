import React, { useEffect, useState } from 'react';
// components
import BarTechnologies from '../components/BarTechnologies.jsx';
// firebase
import { Firestore } from '../config/firebase';
// styles
import './styles/Home.css';
// files
import Profile from '../images/me.jpg';

const Home = ( ) => {
    const [data, setData] = useState({});
    const fecthPersonalInfo =  ( ) => {
        
        Firestore
            .collection("home")
            .doc("info").get( )
            .then( ( doc  ) => {
                if ( doc.exists ){
                    const item = doc.data( );
                    
                    
                    setData( data => item)
                }
            })

    }

    useEffect( ( ) => {
        fecthPersonalInfo( );
    }, [ ]);


    if ( data ){
        return (
            <div className="Home">
                <div className="Home-container">
                    <img src={Profile} alt="Profile"/>
                    <div className="Home-text">
                        <p className="Home-title">{ data.role }</p>
                        <div className="Home-info">
                            {data.description}
                        </div>
                    </div>
                </div>
                <BarTechnologies />
            </div>        
        )
    }        

    return (
        <h1>Loading...</h1>
    )
    
}

export default Home;