import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import {IUser} from "../../moduls/IUser";
import User from "../user/User";
import styles from './UserStyle.module.css'


const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);
    return (
        <div >
            {
                users.map((user: IUser, index) => (<User item = {user} key = {user.id}/>))
            }
        </div>
    );
};

export default Users;