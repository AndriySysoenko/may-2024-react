import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
// import {IPost} from "./models/IPost";
// import {getPostsOfUser} from "./service/api.service";


const App: FC = () => {

const[userId, setUserId] = useState <number> (0);
    // console.log(userId)
const lift = (id:number) => {
    setUserId(id);
}
    // const[posts, setPosts] = useState <IPost[]> ([]);
    // useEffect (() => {
    //     if(userId>0)
    //     getPostsOfUser(userId)
    //         .then ((response:IPost[]) => {setPosts(response);console.log(response)});
    //
    // }, [userId]);
  return (
      <div>
          <h2>{userId}</h2>
          <hr/>
          <Posts userId={userId}/>
          <hr/>
          <Users lift={lift}/>
      </div>
  )
}

export default App;

