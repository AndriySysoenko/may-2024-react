import React, {FC, useState, useEffect} from 'react';
import {IUser} from "../../models/IUser"

type IUserProps = {user:IUser; lift:(id:number)=>void}
const User: FC<IUserProps> = ({user, lift}) => {
	
return (
		<div key={user.id}>
			
			<p>ID: {user.id}</p>,
		    <p>First Name: {user.firstName}<p>,
		    <p>Last Name: {user.lastName}<p>,
		      maidenName: {string},
		      age: {number},
		      gender: {string},
		      email: {string},
		      phone: {string},
		      username: {string},
		      password: {string},
		      birthDate: {string},
		      image: {string},
		      bloodGroup: {string},
		      height: {number},
		      weight: {number},
		      eyeColor: {string},
		      hair: {color: {string}, type: {string}},
		      ip: {string},
		      address: IAddress,
		      macAddress: {string},
		      university: {string},
		      bank: IBank,
		      company: ICompany,
		      ein: {string},
		      ssn: {string},
		      userAgent: {string},
		      crypto: {
		        coin: {string},
		        wallet: {string},
		        network: {string}},
		      role: {string}
			<button onClick = {() =>{
				lift(id);
			}>Posts</button>
		</div>

	);
};

export default User;