import React, {FC} from 'react';
import {IUser} from "../../models/IUser"

type IUserProps = {user:IUser; lift:(id:number)=>void}
const User: FC<IUserProps> = ({user, lift}) => {
	
return (
		<div key={user.id}>
			
			  <p>ID: {user.id}</p>
		      <p>First Name: {user.firstName}</p>
		      <p>Last Name: {user.lastName}</p>
		      <p>maidenName: {user.maidenName}</p>
		      <p>age: {user.age}</p>
		      <p>gender: {user.gender}</p>
		      <p>email: {user.email}</p>
		      <p>phone: {user.phone}</p>
		      <p>username: {user.username}</p>
		      <p>password: {user.password}</p>
		      <p>birthDate: {user.birthDate}</p>
				<img src = {user.image}/>
		      <p>bloodGroup: {user.bloodGroup}</p>
		      <p>height: {user.height}</p>
		      <p>weight: {user.weight}</p>
		      <p>eyeColor: {user.eyeColor}</p>
		      <ul>hair:
				  <li>color: {user.hair.color}</li>
				  <li>type: {user.hair.type}</li>
			  </ul>
		      <p>ip: {user.ip}</p>
			  <ul>address:
				<li>address: {user.address.address}</li>
				<li>city: {user.address.city}</li>
				<li>state: {user.address.state}</li>
				<li>stateCode: {user.address.stateCode}</li>
				<li>postalCode: {user.address.postalCode}</li>
				<ul>coordinates:
					<li>lat: {user.address.coordinates.lat}</li>
					<li>lng: {user.address.coordinates.lng}</li>
				</ul>
				<li>country: {user.address.country}</li>
			  </ul>
		      <p>macAddress: {user.macAddress}</p>
		      <p>university: {user.university}</p>
			  <ul>bank:
				  <li>cardExpire: {user.bank.cardExpire}</li>
				  <li>cardNumber: {user.bank.cardNumber}</li>
				  <li>cardType: {user.bank.cardType}</li>
				  <li>currency: {user.bank.currency}</li>
				  <li>iban: {user.bank.iban}</li>
			  </ul>
			<ul>company:
				<li>department: {user.company.department}</li>
				<li>name: {user.company.name}</li>
				<li>title: {user.company.title}</li>
				<ul>address:
					<li>address: {user.company.address.address}</li>
					<li>city: {user.company.address.city}</li>
					<li>state: {user.company.address.state}</li>
					<li>stateCode: {user.company.address.stateCode}</li>
					<li>postalCode: {user.company.address.postalCode}</li>
				</ul>
					<ul>coordinates:
						<li>lat: {user.company.address.coordinates.lat}</li>
						<li>lng: {user.company.address.coordinates.lng}</li>
					</ul>
					<li>country: {user.company.address.country}</li>
			</ul>
		      <p>ein: {user.ein}</p>
		      <p>ssn: {user.ssn}</p>
		      <p>userAgent: {user.userAgent}</p>
		      <ul>crypto:
				  <li>coin: {user.crypto.coin}</li>
				  <li>wallet: {user.crypto.wallet}</li>
				  <li>network: {user.crypto.network}</li>
			  </ul>
		      <p>role: {user.role}</p>

			<button onClick = {() =>{
				lift(user.id);
			}}>Posts</button>
		</div>

	);
};

export default User;