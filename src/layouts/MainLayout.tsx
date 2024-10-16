import React from 'react';
import {Outlet} from "react-router-dom";
import MenuLayoutComponent from "../components/menu/MenuLayoutComponent";

const MainLayout = () => {
    return (
        <div>
            <MenuLayoutComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;