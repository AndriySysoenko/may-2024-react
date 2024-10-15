import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type IProps = {post: IPost}
const Post:FC<IProps> = ({post}) => {
    return (
        <div key={post.id}>
            <p>ID: {post.id},</p>
            <h3>Title: {post.title}</h3>
            <p>body: {post.body}</p>
            <ul>tags:
                {post.tags.map((tags) => (
                    <li><p>{tags}</p></li>
                ))}
            </ul>
            <ul>reactions:
                <li>likes: {post.reactions.likes}</li>
                <li>dislikes: {post.reactions.dislikes}</li>
            </ul>
            <p>views: {post.views}</p>
            <p>userId: {post.userId}</p>
        </div>
    );
};

export default Post;