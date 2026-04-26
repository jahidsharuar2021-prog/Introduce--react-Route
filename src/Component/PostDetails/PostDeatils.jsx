import React from 'react';
import { useLoaderData } from 'react-router';

const PostDeatils = () => {
    const post=useLoaderData();
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    );
};

export default PostDeatils;