import React, {useEffect, useState } from 'react';
import { IPost } from '../models/IPost';
import { getPosts } from '../services/api.service';

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts()
            .then((velue: IPost[]) => setPosts(velue))
    }, []);

    return (
        <div>
            {
                posts.map((item:IPost) => (<div key={item.id}>{item.id} {item.title}</div>))
            }
        </div>
    );
};

export default Posts;