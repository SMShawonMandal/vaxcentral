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
export const router = createBrowserRouter([
    {

        path: "/",
        element: <Main />,
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
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
    
]);