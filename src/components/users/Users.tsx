import React, {FC, useState, useEffect} from 'react';
import {IUser} from "../../models/IUser";
import User from "./components/user/User";

type IUsersProps = {
	lift: (id:number)=>void
}
const Users: FC<IUsersProps> = ({lift}) => {
	let [users, setUsers] = useState <IUser[]> ([]);

	useEffect (() => {
		getUsers();
		.then ((response:IUser[]) => {setUsers(response);});
	}, []);
return (
		<div>
			{
			users.map((value:IUser) => <User user={value} key={user.id} lift={lift}/>);
			}
		</div>

	);
};

export default Users;