import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const userstyle={
        border:'2px solid yellow',
        borderRadious:'20px',
        margin:'10px',
        padding:'10px'
    }
   
    return (
        <div style={userstyle}>
            <h3>Name:{user.name}</h3>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
            <Link to={`/users/${user.id}`}> Show Details</Link>
        </div>
    );
};

export default User;