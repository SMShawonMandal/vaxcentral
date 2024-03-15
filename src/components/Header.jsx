import React from 'react'
import logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const navbarlink = <>
        <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    color: isActive ? "#4FB2E5" : "black",

                    borderBottom: isActive ? "2px solid #4FB2E5 " : "",
                    width: 50,
                };
            }}
            className='pt-2 text-center mr-2'
        >
            Home
        </NavLink>
        <NavLink
            to="/contact"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    color: isActive ? "#4FB2E5" : "black",
                    borderBottom: isActive ? "2px solid #4FB2E5 " : "",
                    width: 60,
                };
            }}
            className='pt-2 text-center  mr-2'
        >
            Contact
        </NavLink>
        <NavLink
            to="/eligibility"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    color: isActive ? "#4FB2E5" : "black",

                    borderBottom: isActive ? "2px solid #4FB2E5 " : "",
                    width: 110,
                };
            }}
            className='pt-2 text-center  mr-2'
        >
            Eligibility Check
        </NavLink>
        <NavLink
            to="/faq"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    color: isActive ? "#4FB2E5" : "black",

                    borderBottom: isActive ? "2px solid #4FB2E5 " : "",
                    width: 40,
                };
            }}
            className='pt-2 text-center  mr-2'
        >
            FAQ
        </NavLink>
    </>
    return (
        <div className="navbar bg-[#e0f2fa] p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarlink}
                    </ul>
                </div>
                <div className='flex w-full items-center justify-start gap-4'>
                    <Link to='/'>
                        <div className='flex w-full items-center justify-start gap-4'>
                            <img src={logo} />
                            <h1 className=' text-3xl'>VaxCentral</h1>
                        </div>
                    </Link>


                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbarlink}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to='/signup' className='btn btn-sm bg-[#4FB2E5] text-white hover:bg-[#4FB2E5]'>Sign Up</Link>
                <Link to='/login' className='btn btn-sm bg-[#4FB2E5] text-white hover:bg-[#4FB2E5]'>Login</Link>
            </div>
        </div>
    )
}

export default Header