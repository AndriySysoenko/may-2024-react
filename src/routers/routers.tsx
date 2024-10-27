import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CartsPage from "../pages/CartsPage";

export const routes = createBrowserRouter([
    {
    path:'/',
    element: <MainLayout/>,
        children:[
            {
                index: true, element: <HomePage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'carts',
                element: <CartsPage/>
            }
        ]
}
])