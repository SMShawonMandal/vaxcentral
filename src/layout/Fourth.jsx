import React from 'react'
import DashBoardDrawer from '../components/DashBoardDrawer'
import { Outlet } from 'react-router-dom'
import LoginHeader from '../components/LoginHeader'
import EmployeeHeader from '../components/EmployeeHeader'

function Fourth() {
  return (
    
    <div>
        <EmployeeHeader></EmployeeHeader>
        <Outlet></Outlet>
    </div>
  )
}

export default Fourth