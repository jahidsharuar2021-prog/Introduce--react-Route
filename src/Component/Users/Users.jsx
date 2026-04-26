import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users=useLoaderData();
    return (
        <div>
            <h2>this is users page</h2>
            {
                users.map(user=> <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;