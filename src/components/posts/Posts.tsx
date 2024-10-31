import React from 'react';
import {useStore} from "../../store";
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

const Posts = () => {
    const {postSlice:{allPosts}} = useStore()

    return (
        <div>
            {
                allPosts.map((post:IPost) => <Post key = {post.id} item = {post}/>)
            }
        </div>
    );
};

export default Posts;