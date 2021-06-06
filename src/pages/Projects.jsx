import React, { Fragment, useEffect, useState } from 'react';
// components
import Project from '../components/Project.jsx';
// firebase
import { Firestore } from '../config/firebase';

const Projects = ( ) => {
    const [data, setData ]= useState({})
    
    const fetchProjects = ( ) => {
        Firestore.collection("cubo").doc("info")
            .get()
                .then( (doc) => {
                    if ( doc.exists){
                        const responseData = doc.data( );
                        console.log( responseData );
                        setData(data => responseData );
                    }
                    
                })
    }
    useEffect( ( ) => {
        fetchProjects( );
    }, []);


    return (
        <Fragment>
            <h1>Projects</h1>
            { data.projects && data.projects.map( (project, index) => {
                return (
                    <Project key={index} data={project} />
                )
                
            })}
            
        </Fragment>
        
    )
}

export default Projects;