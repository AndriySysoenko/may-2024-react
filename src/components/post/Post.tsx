import React, {FC} from 'react';
import {IPost} from "../../moduls/IPost";

type IUserProps = {item:IPost;}

const Post:FC <IUserProps> = ({item}) => {
    return (
        <div key={item.id}>
            <p>UserID: {item.userId} ID: {item.id}</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <hr/>
        </div>
    );
};

export default Post;