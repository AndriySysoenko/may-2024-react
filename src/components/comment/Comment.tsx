import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

type IUserProps = {item:IComment;}

const Comment:FC <IUserProps> = ({item}) => {
    return (
        <div key={item.id}>
            <div>
                <p>PostID: {item.postId} ID: {item.id}</p>
                <p>Name: {item.name} - Email: {item.email}</p>
                <h3>{item.body}</h3>
            </div>
            <hr/>
        </div>
    );
};

export default Comment;