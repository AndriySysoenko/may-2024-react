import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import User from "../user/User";
import {IUser} from "../../models/IUser";
import {usersSliceAction} from "../../redux/slices/usersSlice";

const Users = () => {

    let {users} = useAppSelector(state => state.usersSlice);
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersSliceAction.loadUsers())

    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <User key={user.id} item={user}/>)
            }
        </div>
    );
};

export default Users;