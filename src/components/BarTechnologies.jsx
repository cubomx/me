import React, { Fragment, useEffect, useState } from 'react';
// Firebase
import { Firestore } from '../config/firebase';
// styles
import './styles/BarTechnologies.css';

const BarTechnologies = ( ) => {
    const [skills, setSkills] = useState({});
    const fetchSkills = ( ) => {
        Firestore.collection("cubo").doc("skills")
            .get( )
            .then( (doc) => {
                if ( doc.exists ){
                    const skillsRetrieved = doc.data( );
                    setSkills(skills => skillsRetrieved );
                    skillsRetrieved.tech.map( (skill) => {
                        console.log( skill );
                    })
                }
            })
    }

    useEffect( ( ) => {
        fetchSkills( );
    }, [] )

    if ( skills ){
        return (
            <div className="BarTechnologies">
                <h1 className="BarTechnologies-title">Tecnologies</h1>
                <div className="BarTechnologies-container">
                { skills.tech && skills.tech.map( (skill, index) => {
                    return (
                            
                            <i key={index} className={skill.class} style={{color: skill.color}}></i>
                        )
                })}
                </div>
            </div>
        )
    }
    
    return ( 
        <h1>Loading skills...</h1>
    )
    
}

export default BarTechnologies;