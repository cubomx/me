import React, { useEffect, useState } from 'react';
// firebase
import { Storage }  from '../config/firebase.js';
// styles
import './styles/Project.css';

const Project = ( props ) => {
    const { title, description, img, year, technologies } = props.data;
    const [image, setImage] = useState('');

    useEffect( ( ) => {
        Storage.ref(img).getDownloadURL()
        .then( ( url ) => {
            setImage( url );
        })
        .catch( ( err ) => {
            console.error( err );
        })
    }, []);

    return (
        <div className="Project">
            <div className="Project-img">
                <img src={image} alt={title + " image"} />
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