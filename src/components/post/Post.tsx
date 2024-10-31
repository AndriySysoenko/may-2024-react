import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type IUserProps = {item:IPost;}

const Post:FC <IUserProps> = ({item}) => {
    return (
        <div key={item.id}>
            <div>
                <p>UserID: {item.userId} ID: {item.id}</p>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <hr/>
            </div>
        </div>
    );
};

export default Post;