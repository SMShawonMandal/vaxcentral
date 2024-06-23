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
import PrivateRoute from "./PrivateRoute";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import Fourth from "../layout/Fourth";
import ChildrenDashboard from "../pages/ChildrenDashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import EmployeeList from "../pages/Admin/EmployeeList";
import EmployeeManagement from "../pages/Admin/EmployeeManagement";
import UserManagement from "../pages/Admin/UserManagement";
import VaccineManagement from "../pages/Admin/VaccineManagement";
import ChildrenManagement from "../pages/Admin/ChildrenManagement";
import AdminRoute from "./AdminRoute";
import EmployeeRoute from "./EmployeeRoute";
import ComplainDashboard from "../pages/Admin/ComplainDashboard";
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
                path: "/childrenDashboard/:name",
                element: <PrivateRoute><ChildrenDashboard></ChildrenDashboard></PrivateRoute>
            }
        ]
        
    },
    {
        path: '/',
        element: <Fourth />,
        children: [
            {
                path: "/employeedashboard" ,
                element:<EmployeeRoute><EmployeeDashboard /></EmployeeRoute>,
            },
            {
                path: "/admindashboard",
                element: <AdminRoute><AdminDashboard />      </AdminRoute>,
            },
            {
                path: "/admin/employees",
                element: <AdminRoute><EmployeeList /> </AdminRoute>,
            },
            {
                path: "admin/employeeManagement",
                element: <AdminRoute><EmployeeManagement /> </AdminRoute>,
            },
            {
                path: "admin/userManagement",
                element: <AdminRoute><UserManagement /> </AdminRoute>,
            },
            {
                path: "admin/vaccineManagement",
                element: <AdminRoute><VaccineManagement /> </AdminRoute>,
            },
            {
                path: "admin/childrenManagement",
                element: <AdminRoute><ChildrenManagement /> </AdminRoute>,
            }
            ,
            {
                path: "admin/complains",
                element: <AdminRoute><ComplainDashboard /> </AdminRoute>,
            }
        ]
        
    },
    
]);