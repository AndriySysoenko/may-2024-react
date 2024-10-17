import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api.service";
import {IPost} from "../../moduls/IPost";
import Post from "../post/Post";


const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, []);
    return (
        <div >
            {
                posts.map((post: IPost) => (<Post item = {post} key = {post.id}/>))
            }
        </div>
    );
};

export default Posts;