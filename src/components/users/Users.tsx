import React, {FC, useState, useEffect} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../service/api.service";
import User from "../user/User";


type IUsersProps = {
	lift: (id:number)=>void
}
const Users: FC<IUsersProps> = ({lift}) => {
	let [users, setUsers] = useState <IUser[]> ([]);

	useEffect (() => {
		getUsers()
		.then ((response:IUser[]) => {setUsers(response);});
	}, []);
return (
		<div>
			{
			users.map((value:IUser) => <User user={value} key={value.id} lift={lift}/>)
			}
		</div>

	);
};

export default Users;