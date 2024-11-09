import React, {useEffect} from 'react';
import {IPost} from "../../models/IPost";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsSliceAction} from "../../redux/slices/postsSlice";
import Post from "../post/Post";

const Posts = () => {
    let {posts} = useAppSelector(state => state.postsSlice);
    let dispatch = useAppDispatch();

    useEffect(() => {
        if (posts.length === 0 ) dispatch(postsSliceAction.loadPosts())

    }, []);

    return (
        <div>
            {
                posts.map((post:IPost) => <Post key = {post.id} item = {post}/>)
            }
        </div>
    );
};

export default Posts;