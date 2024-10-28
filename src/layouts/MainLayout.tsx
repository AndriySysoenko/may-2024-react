import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import {IUserInfo} from "../models/IUserInfo";

const MainLayout = () => {
    const [userData, setUserData] = useState<IUserInfo | undefined>(undefined)
    const userIdentification =(userLoginInfo:IUserInfo) => {
        setUserData(userLoginInfo)
    }

    return (
        <div>
            <Menu userData = {userData}/>
            <Outlet context={userIdentification}/>
        </div>
    );
};

export default MainLayout;