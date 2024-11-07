import React, {useEffect} from 'react';
import {IComment} from "../../models/IComment";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {commentsSliceAction} from "../../redux/slices/commentsSlice";
import Comment from "../comment/Comment";

const Comments = () => {

    let {comments} = useAppSelector(state => state.commentsSlice);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentsSliceAction.loadComments())

    }, []);

    return (
        <div>
            {
                comments.map((comment:IComment) => <Comment key = {comment.id} item = {comment}/>)
            }
        </div>
    );
};

export default Comments;