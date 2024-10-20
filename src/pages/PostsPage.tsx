import React from 'react';
import Posts from '../components/Posts';
import PaginationComponent from '../components/paginations/PaginationComponent';

const PostsPage = () => {
    return (
        <div>
            <Posts/>
            <PaginationComponent/>
        </div>
    );
};

export default PostsPage;