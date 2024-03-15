import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginHeader from '../components/LoginHeader'

function Secondary() {
    return (
        <div>
            <LoginHeader />
            <Outlet />
        </div>

    )
}

export default Secondary