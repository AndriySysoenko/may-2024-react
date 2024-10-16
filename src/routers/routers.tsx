import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
                {
                element: <UsersPage/>, index: true
                },
                {
                path: 'users',
                element: <UsersPage/>,
                },
                {
                path: 'posts',
                element: <PostsPage/>,
                },
                {
                path: 'comments',
                element: <CommentsPage/>,
                },
            ]
    }
]);