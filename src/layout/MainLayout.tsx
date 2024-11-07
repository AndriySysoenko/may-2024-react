import React from 'react';
import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu";
import {store} from "../redux/store";
import {Provider} from "react-redux";

const MainLayout = () => {
    return (
        <div>
            <Provider store={store}>
            <Menu/>
            <Outlet/>
            </Provider>
        </div>
    );
};

export default MainLayout;