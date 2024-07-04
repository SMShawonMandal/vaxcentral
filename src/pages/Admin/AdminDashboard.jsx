import React, { useState, useEffect } from 'react';
import 'daisyui';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminDashboard() {


  return (
    <div className="p-8 bg-gradient-to-b from-[#e0f2fa] to-white min-h-screen ">
      <div className="mb-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 ">Admin Dashboard</h2>
        <div className='flex lg:flex-row md:flex-row flex-col gap-4 w-full justify-center items-center mt-10'>
          <div className='lg:[w-40%] w-[90%] flex lg:flex-row flex-col gap-4'>
            <Link to="/admin/employeeManagement" className='w-full'><button className='w-full p-2 bg-blue-500 text-white rounded-md'>Manage Employee</button></Link>
            <Link to="/admin/vaccineManagement" className='w-full'><button className='w-full p-2 bg-blue-500 text-white rounded-md'>Manage Vaccines</button></Link>
          </div>
          <div className='lg:[w-40%] w-[90%] flex lg:flex-row flex-col gap-4'>
            <Link to="/admin/userManagement" className='w-full'><button className='w-full p-2 bg-blue-500 text-white rounded-md'>Manage User</button></Link>
            <Link to="/admin/childrenManagement" className='w-full'><button className='w-full p-2 bg-blue-500 text-white rounded-md'>Manage Children</button></Link>
            <Link to="/admin/complains" className='w-full'><button className='w-full p-2 bg-blue-500 text-white rounded-md'>Check Complains</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
