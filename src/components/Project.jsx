import React, { useEffect, useState } from 'react';
// firebase
import { Storage }  from '../config/firebase.js';
// styles
import './styles/Project.css';

const Project = ( props ) => {
    const { title, description, img, year, technologies, url } = props.data;
    const [image, setImage] = useState('');

    useEffect( ( ) => {
        Storage.ref(img).getDownloadURL()
        .then( ( link ) => {
            setImage( link );
        })
        .catch( ( err ) => {
            console.error( err );
        })
    }, []);

    return (
        <div className="Project">
            <div className="Project-img">
                <a href={url} target="_blank"> 
                <img src={image} alt={title + " image"} />
                </a>
            </div>
            
            <div className="Project-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Year: </strong>{year}</p>
                <p><strong>Technologies</strong>
                    </p>
                <ul>
                    { technologies && technologies.map( ( tech, index ) => {
                        return (
                            <li key={index}>{tech}</li>
                        )
                    })}
                </ul>
            </div>
            
            
        </div>
        
    )
}

export default Project; 