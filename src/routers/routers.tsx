import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";
import PostDitailsPage from "../pages/PostDitailsPage";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element:<UsersPage/>
            },
            {
                path: 'users',
                element: <UsersPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>,
            },
            {
                path: 'posts/:id',
                element: <PostDitailsPage/>,
            }
        ]
    }
])

