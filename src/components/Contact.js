import React from 'react';
import PropsTypes from 'prop-types';
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        };
    }

    render() {

        return (
            
            <div className='Contact'>
                <img className='avatar' src={this.props.avatar} alt={this.props.name}/>
                <div>
                    <h2 className='name'>{this.props.name}</h2>
                    <div className='status' onClick={() => {
                        const status = !this.state.online;
                        this.setState({online : status});
                    }}>
                        <div className={this.state.online ? 'status-online' : 'status-offline'}/>
                        <p className='status-text'>{this.state.online ? 'Online' : 'Offline'}</p>       
                    </div>
                </div>
            </div>    
            
        )  
    }
}


Contact.PropsTypes = {
    name: PropsTypes.string.isRequired,
    online: PropsTypes.bool.isRequired,
};

export default Contact;

