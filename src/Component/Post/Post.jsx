import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title}=post;
    return (
        <div style={{border:'2px solid red', padding:'10px'}}>

            <h2>{title}</h2>
            
            <Link to={`/posts/${id}`}> 
           <button>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;