import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postsSliceAction} from "../redux/slices/postsSlice";
import {commentsSliceAction} from "../redux/slices/commentsSlice";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import Post from "../components/post/Post";
import Comment from "../components/comment/Comment";

const PostsWithComments = () => {

    let {posts} = useAppSelector(state => state.postsSlice);
    let {comments} = useAppSelector(state => state.commentsSlice);
    let dispatch = useAppDispatch();

    useEffect(() => {
        if (posts.length === 0 ) dispatch(postsSliceAction.loadPosts())
        if (comments.length === 0) dispatch(commentsSliceAction.loadComments())
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
                                    <li key={comment.id}><Comment item={comment}/></li>
                                ))}
                        </ul>

                    </div>))
            }
        </div>
    );
};

export default PostsWithComments;