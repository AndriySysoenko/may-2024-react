import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import {useStore} from "../store";
import {getComments, getPosts, getUsers} from "../services/api.service";

const MainLayout = () => {
    const {userSlice : {loadUsers}, postSlice : {loadPosts}, commentSlice : {loadComments}} = useStore()
    useEffect(() => {
        getUsers()
            .then(users => loadUsers(users))
        getPosts()
            .then(posts => loadPosts(posts))
        getComments()
            .then(comments => loadComments(comments))
    }, []);


    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;