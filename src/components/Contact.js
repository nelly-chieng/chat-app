import React from 'react';
import './Contact.css';

function Contact(){
    return(
        <div className='Contact'>
            <img className='avatar' src='https://randomuser.me/api/portraits/men/87.jpg'/>
            <div>
                <h2 className='name'>Elmer Woods</h2>
                <div className='status'>
                    <div className='status-online'/>
                    <p className='status-text'>oneline</p>       
                </div>
            </div>
        </div>
    )
}


export default Contact;