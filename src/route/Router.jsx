import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Eligibility from "../pages/Eligibility";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Secondary from "../layout/Secondary";
import Error from "../pages/Error";
import UserDashboard from "../pages/User/UserDashboard";
import Children from "../pages/User/Children";
import Third from "../layout/Third";
import RegisterNew from "../pages/User/RegisterNew";
import UserProfile from "../pages/User/UserProfile";
import PrivateRoute from "./PrivateRoute";
import EmployeeLogin from "../pages/EmployeeLogin";
export const router = createBrowserRouter([
    {

        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Landing />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/eligibility",
                element: <Eligibility />,
            },
            {
                path: "/faq",
                element: <Faq />,
            },
        ],
    },
    {

        path: "/",
        element: <Secondary />,
        errorElement: <Error />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/employeeLogin",
                element: <EmployeeLogin />,
            }
        ],
    },
    {
        path: '/',
        element: <Third />,
        children: [
            {
                path: "/userdashboard" ,
                element: <PrivateRoute><UserDashboard /></PrivateRoute>,
            },
            {
                path: "/children" ,
                element: <PrivateRoute><Children /></PrivateRoute>,
            },
            {
                path: "/registernewvaccine" ,
                element: <PrivateRoute><RegisterNew /></PrivateRoute>,
            },
            {
                path: "/profile" ,
                element: <PrivateRoute><UserProfile /></PrivateRoute>,
            },

        ]
        
    },
    
]);