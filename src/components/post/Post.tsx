import React from 'react';
import { IPost } from '../../models/IPost';
import { useLocation } from 'react-router-dom';

const Post = () => {
    let {state:{info}} = useLocation()
    const allPostInfo: IPost = info;
    return (
        <div>
            <div>
                <p>ID: {allPostInfo.id}</p>
                <h2>Title: {allPostInfo.title}</h2>
                <p>Body: {allPostInfo.body}</p>
                <p>Tags</p>
                <ul>
                    {allPostInfo.tags.map((tag,index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
                <p>Reactions:</p>
                <ul>
                    <li>Likes: {allPostInfo.reactions.likes}</li>
                    <li>Dislikes: {allPostInfo.reactions.dislikes}</li>
                </ul>
                <p>Views: {allPostInfo.views}</p>
                <p>UserId: {allPostInfo.userId}</p>
            </div>
        </div>
    );
};

export default Post;