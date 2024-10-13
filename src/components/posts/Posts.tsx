import React, {FC, useState, useEffect} from 'react';
import {IPost} from "../../models/IPost";
import {getPostsOfUser} from "../../service/api.service";
import Post from "../post/Post";


type PostProps = {posts: IPost[], userId:number}

const Posts: FC<PostProps> = ({posts: initialPosts, userId}) => {
const[posts, setPosts] = useState <IPost[]> ([]);

useEffect (() => {
    getPostsOfUser(userId)
    .then ((response:IPost[]) => {setPosts(response);console.log(response)});

  }, [userId]);

return (
		<div>
			{
			posts.map((value:IPost) => <Post post={value} key={value.id}/>)
			}
		</div>

	);
};

export default Posts;