import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData();
    const { name, website } = user;
    console.log(user);
    return (
        <div>
            <p>User Details Here</p>
            <p>Name:{name}</p>
           <p>Website:{website}</p>
        </div>
    );
};

export default UserDetails;