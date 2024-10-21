import React from 'react';
import { useLocation } from 'react-router-dom';
import { IPost } from '../models/IPost';
import Post from '../components/post/Post';

const PostDitailsPage = () => {

    return (
        <div>
            {
                <Post/>
            }
        </div>
    );
};

export default PostDitailsPage;