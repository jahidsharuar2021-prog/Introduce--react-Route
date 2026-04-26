import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
const user=use(userPromise);
console.log(user);
  return (
    <div>
     <p><small>user Name{user.username}</small></p>
    </div>
  );
};

export default UserDetails2;