import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';
import { useLocation } from 'react-router';

const User = ({user}) => {
    const [showInfo,setShowInfo]=useState(false);

    const[visitHome,setvisitedHome]=useState(false);
    
    const loaction=useLocation();
    console.log(loaction);

   const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
   .then(res=> res.json());

    
    const userstyle={
        border:'2px solid yellow',
        borderRadious:'20px',
        margin:'10px',
        padding:'10px'
    }

    if(visitHome){
        return<Navigate to={'/'}></Navigate>
    }
   
    return (
      <div style={userstyle}>
        <h3>Name:{user.name}</h3>
        <p>Email:{user.email}</p>
        <p>Phone:{user.phone}</p>
        <Link to={`/users/${user.id}`}> Show Details</Link>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "Hide" : "show"}Info
        </button>

        {showInfo && (
          <Suspense fallback={<span>Loading.....</span>}>
            <UserDetails2 userPromise={userPromise}></UserDetails2>
          </Suspense>
        )}

        <button onClick={()=>setvisitedHome(true)}>Visite Home</button>
      </div>
    );
};

export default User;