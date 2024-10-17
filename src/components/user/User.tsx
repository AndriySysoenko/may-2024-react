import React, {FC} from 'react';
import {IUser} from "../../moduls/IUser";

type IUserProps = {item:IUser;}

const User:FC <IUserProps> = ({item}) => {
    return (
        <div key={item.id}>
            <p>id: {item.id}</p>
            <h2>Name: {item.name} - Username: {item.username}</h2>
            <p>Email: {item.email}</p>
            <ul>address:
                <li>street: {item.address.street}</li>
                <li>suite: {item.address.suite}</li>
                <li>city: {item.address.city}</li>
                <li>zipcode: {item.address.zipcode}</li>
                <ul>geo:
                    <li>lat: {item.address.geo.lat}</li>
                    <li>lng: {item.address.geo.lng}</li>
                </ul>

            </ul>
            <p>Phone: {item.phone}</p>
            <p>Website: {item.website}</p>
            <ul>company:
                <li>name: {item.company.name}</li>
                <li>catchPhrase: {item.company.catchPhrase}</li>
                <li>bs: {item.company.bs}</li>
            </ul>
            <hr/>
        </div>
    );
};

export default User;