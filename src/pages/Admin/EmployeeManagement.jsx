
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import EmployeeList from './EmployeeList';

function EmployeeManagement(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    function addEmployee(e) {
      e.preventDefault();
      const form = e.target;
  
      // Logic to add an employee
      const fullName = e.target.fullname.value;
      const nidNumber = e.target.nidnumber.value;
      const mobileNumber = e.target.mobilenumber.value;
      const dob = e.target.dob.value;
      const password = e.target.password.value;
      console.log(fullName, nidNumber, mobileNumber, dob, password);
  
      console.log('Employee added');
  
      axios.post('http://localhost:5001/api/admin/employee/add', {
        fullName,
        nidNumber,
        mobileNumber,
        dob,
        password
      })
        .then((response) => {
          console.log('Employee added', response.data)
          Swal.fire({
            title: 'Success!',
            text: 'Employee added successfully',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });

          setTimeout(() => {
            form.reset()
            setIsModalOpen(false)
            window.location.reload();
          }, 2000);
        })
  
        .catch((error) => {
          console.log('Employee not added', error.response)
          Swal.fire({
            title: 'Error!',
            text: error.response.data,
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          });
        });
  
    }
  
  
    return (
      <div className="p-8 bg-gradient-to-b from-[#e0f2fa] to-white min-h-screen ">
        <div className="mb-6 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Employee Management</h2>
            <div className="flex mb-6">
              <button onClick={() => setIsModalOpen(true)} className="p-2 bg-blue-500 text-white rounded-md">Add Employee</button>
            </div>
        </div>
  
  
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[80%]">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Add Employee</h2>
              <form onSubmit={addEmployee}>
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name='fullname'
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">NID Number</label>
                  <input
                    type="text"
                    name="nidnumber"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    name='mobilenumber'
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name='dob'
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name='password'
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="p-2 bg-green-500 text-white rounded-md">Create Employee</button>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 ml-2 bg-red-500 text-white rounded-md">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
        <EmployeeList></EmployeeList>
      </div>
    );
}

export default EmployeeManagement