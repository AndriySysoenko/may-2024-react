import React from 'react';
import {useStore} from "../../store";
import {IUser} from "../../models/IUser";
import User from "../user/User";

const Users = () => {

    const {userSlice:{allUsers}} = useStore()

    return (
        <div>
            {
                allUsers.map((user:IUser) => <User key = {user.id} item = {user}/> )
            }
        </div>
    );
};

export default Users;