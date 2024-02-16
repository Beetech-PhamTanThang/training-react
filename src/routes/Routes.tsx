import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import RoutePath from "config/Routes";
import HomePage from "pages/home/HomePage";
import Login from "pages/login/Login";


const routesConfig = createBrowserRouter([
    {
        path: RoutePath.HomePage,
        element: <MainLayout/>,
        children: [
            {
                path: RoutePath.HomePage,
                element: <HomePage/>
            }
        ]
    },
    {
        path: RoutePath.Login,
        element: <Login/>,
    }
]);

const Router: React.FC = () => {
    return (
        <RouterProvider router={routesConfig}/>
    );
};
export default Router;