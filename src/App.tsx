import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import posts from "./components/posts/Posts";


const App: FC = () => {

const[userId, setUserId] = useState <number> (0);
    console.log(userId)
const lift = (id:number) => {
    setUserId(id);

}

  return (
      <div>
          <h2>{userId}</h2>
          <hr/>
          <Posts posts={posts} userId={userId}/>
          <hr/>
          <Users lift={lift}/>
      </div>
  )
}

export default App;

