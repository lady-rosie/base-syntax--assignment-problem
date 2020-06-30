import React from 'react';
import './Message.css';

const UserOutput = (props) => {
    return(
        <div className="Message">
            <p>{props.p1}</p>
            <p>{props.p2}</p>
            <h4>{props.username}</h4>
        </div>
    );
};

export default UserOutput;