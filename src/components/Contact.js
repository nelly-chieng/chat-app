import React from 'react';
import PropsTypes from 'prop-types';
import ContactList from './ContactList';
import './Contact.css';


const Contact = ({name, avatar, online}) => ( 
        <div className='Contact'>
            <img className='avatar' src={avatar} alt={name}/>
            <div>
                <h2 className='name'>{name}</h2>
                <div className='status'>
                    <div className={online ? 'status-online' : 'status-offline'}/>
                    <p>{online ? 'Online' : 'Offline'}</p>       
                </div>
            </div>
        </div>
);

Contact.PropsTypes = {
    name: PropsTypes.string.isRequired,
    online: PropsTypes.bool.isRequired,
};

export default Contact;

