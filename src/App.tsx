import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
// import {IPost} from "./models/IPost";
// import {getPostsOfUser} from "./service/api.service";


const App: FC = () => {

const[userId, setUserId] = useState <number> (0);

const lift = (id:number) => {
    setUserId(id);
}
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

