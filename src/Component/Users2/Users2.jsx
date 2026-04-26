import React, { use } from 'react';

const Users2 = ({ userPromise }) => {
    const users = use(userPromise);
  return (
    <div>
      <h2>This users 2</h2>
    </div>
  );
};

export default Users2;