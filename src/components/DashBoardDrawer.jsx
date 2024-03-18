import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import LoginHeader from './LoginHeader';

function DashBoardDrawer() {
    const dashboardlinks = <>

        <div className='flex flex-col '>
            <NavLink
                to="/userdashboard"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Dashboard
            </NavLink>
            <NavLink
                to="/children"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Children
            </NavLink>
            <NavLink
                to="/registernewvaccine"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Register New Vaccine
            </NavLink>
            <NavLink
                to="/profile"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Profile
            </NavLink>
        </div>
    </>
    const otherlinks = <>
        <div className='flex flex-col '>
            <h2 className='pb-6 font-bold text-xl'>Others</h2>
            <NavLink
                to="/"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Home
            </NavLink>
            <NavLink
                to="/contact"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Contact
            </NavLink>
            <NavLink
                to="/eligibility"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Eligibility Check
            </NavLink>
            <NavLink
                to="/faq"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                FAQ
            </NavLink>
            <NavLink
                to="/setting"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Setting
            </NavLink>
            <NavLink
                to="#"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "black" : "black",
                        fontWeight: isActive ? "bold" : "normal",
                        fontSize: isActive ? "16px" : "16px",
                    };
                }}
                className='pt-2 text-center mr-2 flex justify-start'
            >
                Logout
            </NavLink>
        </div>
    </>
    return (

        <div className='flex flex-row'>
            <div className='h-screen lg:flex lg:flex-col gap-20 lg:w-[300px]  bg-[#CDE5F1] fixed'>
                <div className='flex lg:w-full pt-8 font-semibold text-xl justify-center'>
                    Shawon Mandal
                </div>
                <div className='pl-8 flex justify-start'>
                    {dashboardlinks}
                </div>
                <div className='w-full flex justify-center'>
                    <div className='w-[80%] divider divider-neutral'>

                    </div>
                </div>
                <div className='pl-8 flex justify-start'>
                    {otherlinks}
                </div>

            </div>
            <div className='flex-1 h-screen ml-[300px] '>
                    <LoginHeader />
                    <Outlet />
            </div>
        </div>
    )
}

export default DashBoardDrawer