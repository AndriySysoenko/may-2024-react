import React from 'react';
import {useStore} from "../store";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const PostsWithComments = () => {
   const{postSlice: {allPosts}, commentSlice:{allComments}} = useStore()

    return (
        <div>
            {
                allPosts.map((post:IPost) => (<div key={post.id}>
                        <p>UserID: {post.userId} ID: {post.id}</p>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <h4>Comments:</h4>
                        <ul>
                            {allComments.filter(comment => comment.postId === post.id)
                                .map((comment: IComment) => (
                                    <li key={comment.id}>PostID: {comment.postId} ID: {comment.id} <p>{comment.body}</p>
                                    </li>
                                ))}
                        </ul>
                        <hr/>
                    </div>)
                )
            }
        </div>
    );
};

export default PostsWithComments;