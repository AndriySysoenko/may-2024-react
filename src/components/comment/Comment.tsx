import React, {FC} from 'react';
import {IComment} from "../../moduls/IComment";

type IUserProps = {item:IComment;}

const Post:FC <IUserProps> = ({item}) => {
    return (
        <div key={item.id}>

            <p>PostID: {item.postId} ID: {item.id}</p>
            <p>Name: {item.name} - Email: {item.email}</p>
            <h3>{item.body}</h3>
            <hr/>

        </div>
    );
};

export default Post;