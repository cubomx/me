import React, {Fragment} from 'react';
// styles 
import './styles/Contact.css';


const Contact = ( ) => {
    return (
        <Fragment>
            <h1>Find me:</h1>
            <div className="Contact-info">
            <a  href="https://www.linkedin.com/in/sergio-vel%C3%A1zquez/" target="_blank">
                <i class="devicon-linkedin-plain colored" />
            </a>
            <a  href="mailto:cheservelram657@gmail.com?Subject=Contact%20you" >
            <i class="fas fa-paper-plane" />
            </a>
                
                
            </div>
        </Fragment>
        
    )
}

export default Contact;