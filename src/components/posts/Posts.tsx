import React, {FC, useState, useEffect} from 'react';
import {IPost} from "../../models/IUser";
// import Post from "./components/post/Post";


const Posts: FC<IPost> = (userId) => {
const[posts, setPosts] = useState <IPost> ([]);

useEffect (() => {
    getPostsOfUser(userId);
    .then ((response:IPost[]) => {setPosts(response);});
  }, [userId]);

return (
		<div>
			{
			posts.map((value:IPost) => <Post post={value} key={post.id}/>);
			}
		</div>

	);
};

export default Posts;