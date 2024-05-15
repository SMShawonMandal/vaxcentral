import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { CgMenuGridO } from "react-icons/cg";
import { FiAlignLeft } from "react-icons/fi";


function DashBoardDrawer() {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const handleLogout = async () => {
        logout()
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Logged Out",
            showConfirmButton: false,
            timer: 2000
        });
        navigate('/');
        window.location.reload()
    }

    const dashboardlinks = <>

        <div className='flex flex-col p-4 gap-4 '>
            <h2 className='pb-6 font-bold text-xl'>Links</h2>
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
            
        </div>
    </>


    const otherlinks = <>
        <div className='flex flex-col p-4 gap-4 '>
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
            
            <div className='pt-2 text-[16px] text-black'>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>

    </>
    return (

        <div>
            <div className="drawer z-50">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center justify-between bg-[#e0f2fa]">
                    {/* Page content here */}
                    <label htmlFor="my-drawer"><FiAlignLeft className=' text-3xl m-7 hover:cursor-pointer' /></label>

                    {/* <h1 className='text-3xl font-bold p-7'>Vaccine Management System</h1> */}
                    <p className='p-7 font-bold text-xl'>{user?.fullName} <br /> Id No:  {user?.userId}</p>
                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {dashboardlinks}
                        {otherlinks}

                    </ul>
                </div>

            </div>

            
            <div className="w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default DashBoardDrawer