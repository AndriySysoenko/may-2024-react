import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../../models/IUser';
import {getUsers } from '../../services/api.service';

type IUserProps = {users:IUser[]}

const Users : FC<IUserProps> = ({users}) => {
    // const [users, setUsers] = useState<IUser[]>([])
    //
    // useEffect(() => {
    //     getUsers()
    //         .then((velue: IUser[]) => setUsers(velue))
    // }, []);
    
    return (
        <div>
            {
                users.map((item:IUser) => (<div key={item.id}>{item.id} {item.firstName} {item.lastName}</div>))
            }
        </div>
    );
};

export default Users;

