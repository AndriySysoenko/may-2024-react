import React, { useEffect, useState } from 'react';
import Users from '../components/users/Users';
import PaginationComponent from '../components/paginations/PaginationComponent';
import { useSearchParams } from 'react-router-dom';
import { getUsers } from '../services/api.service';
import { IUser } from '../models/IUser';


const UsersPage = () => {
    const [query, setQuery] = useSearchParams ({page:'1'})
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const page = query.get('page')
        if(page){
            getUsers(+page)
                .then((velue: IUser[]) => setUsers(velue))
        }
    }, [query]);
    return (
        <div>
            <Users users={users}/>
            <PaginationComponent/>

        </div>
    );
};

export default UsersPage;