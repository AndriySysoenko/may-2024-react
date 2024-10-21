import React, { FC } from 'react';
import { IUser } from '../../models/IUser';

type IUserProps = {users:IUser[]}

const Users : FC<IUserProps> = ({users}) => {

    return (
        <div>
            {
                users.map((item:IUser) => (<div key={item.id}>{item.id} {item.firstName} {item.lastName}</div>))
            }
        </div>
    );
};

export default Users;

