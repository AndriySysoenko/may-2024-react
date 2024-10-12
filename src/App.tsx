import React, {FC} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPost} from "../models/IPost";

const App: FC = () => {

const[userId, setUserId] = useState <number> (0);
const lift = (id:number) => {
    setUserId(id);
}

  return (
      <div>
        <Posts/>
        <Users lift={lift}/>
      <div/>

  );
};

export default App;

