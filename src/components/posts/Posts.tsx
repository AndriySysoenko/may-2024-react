import React, {FC, useState, useEffect} from 'react';
import {IPost} from "../../models/IPost";
import {getPostsOfUser} from "../../service/api.service";
import Post from "../post/Post";

type PostProps = {userId:number}

const Posts: FC<PostProps> = ({userId}) => {
const[posts, setPosts] = useState <IPost[]> ([]);

useEffect (() => {
	if(userId>0)
    getPostsOfUser(userId)
    .then ((response:IPost[]) => {setPosts(response)});
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