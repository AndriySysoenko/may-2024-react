import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuLayout from '../components/menu/MenuLayout';


const MainLayout = () => {
    return (
        <div>
            <MenuLayout/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;