import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postsSliceAction} from "../redux/slices/postsSlice";
import {commentsSliceAction} from "../redux/slices/commentsSlice";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import Post from "../components/post/Post";

const PostsWithComments = () => {
    let {posts} = useAppSelector(state => state.postsSlice);
    let {comments} = useAppSelector(state => state.commentsSlice);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postsSliceAction.loadPosts())
        dispatch(commentsSliceAction.loadComments())

    }, []);

    return (
        <div>
            {
                posts.map((post:IPost) => (
                    <div key={post.id}>
                        <Post item={post}/>
                        <h4>Comments:</h4>
                        <ul>
                            {comments.filter(comment => comment.postId === post.id)
                                .map((comment: IComment) => (
                                    <li key={comment.id}>PostID: {comment.postId} ID: {comment.id} <p>{comment.body}</p>
                                    </li>
                                ))}
                        </ul>

                    </div>))
            }
        </div>
    );
};

export default PostsWithComments;