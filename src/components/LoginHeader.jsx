import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function LoginHeader() {
    return (
        <div className="navbar bg-[#e0f2fa] p-4">
            <div className="navbar-start">
                <Link to='/'>
                    <div className='flex w-full items-center justify-start gap-4'>
                        <img src={logo} />
                        <h1 className=' text-3xl'>VaxCentral</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LoginHeader