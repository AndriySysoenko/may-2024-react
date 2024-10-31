import React from 'react';
import {useStore} from "../../store";
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";

const Comments = () => {

    const {commentSlice:{allComments}} = useStore();

    return (
        <div>
            {
                allComments.map((comment:IComment) => <Comment key = {comment.id} item = {comment}/>)
            }
        </div>
    );
};

export default Comments;