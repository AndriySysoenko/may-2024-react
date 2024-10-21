import React, { useEffect, useState } from 'react';
import Users from '../components/users/Users';
import PaginationComponent from '../components/paginations/PaginationComponent';
import { useSearchParams } from 'react-router-dom';
import { getUsers } from '../services/api.service';
import { IUser } from '../models/IUser';


const UsersPage = () => {
    const [query] = useSearchParams ({page:'1'});
    const [users, setUsers] = useState<IUser[]>([]);
    const [marker, setMarker] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page')
        if(page){
            getUsers(+page)
                .then((value: {users:IUser[]} & {marker: boolean}) => {
                    setUsers(value.users); setMarker(value.marker);
                })}
    }, [query]);
    return (
        <div>
            <Users users={users}/>
            <PaginationComponent marker={marker}/>

        </div>
    );
};

export default UsersPage;