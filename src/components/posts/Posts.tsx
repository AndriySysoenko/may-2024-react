import React, {FC} from 'react';
import { IPost } from '../../models/IPost';
import { Link } from 'react-router-dom';


type IPostProps = {posts:IPost[]}
const Posts:FC<IPostProps> = ({posts}) => {
    
    return (
        <div>
            {
                posts.map((item:IPost) => (<div key={item.id}>{item.id}<Link state ={{info: item}} to={item.id.toString()}> {item.title}</Link></div>))
            }
        </div>
    );
};

export default Posts;