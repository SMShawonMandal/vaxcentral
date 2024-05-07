import React from 'react'
import  { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

function EmployeeLogin() {
  const [employee_id, setemployee_id] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(employee_id,password)

    try {
      // Make a POST request to your backend to authenticate user
      const response = await axios.post('http://localhost:5001/api/login/employee', {
        employee_id,
        password,
      });
      // console.log(response.data.token)
      login(response.data)

      // If authentication is successful, redirect user or show success message
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/employeeDashboard');
      
      // Redirect user to dashboard or any other authenticated page
      // history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error.response.data);

      // Show error message if login fails
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message || 'Incorrect phone number or password',
      });
    }
  };

  return (
    <div className='h-screen w-full bg-gradient-to-b from-[#e0f2fa] to-white flex justify-center items-center'>
      <div className='space-y-8 lg:w-[552px] md:w-[400px] w-[350px] max-h-[790px]  bg-white border-[1px] border-black px-12 py-20 rounded-xl'>
        <div>
          <h1 className=' text-3xl font-bold text-center'>Employee Login </h1>
        </div>
        <form onSubmit={handleSubmit} className=''>
          <div className='flex flex-col gap-4 pb-10'>
            <label htmlFor="employee_id" className='text-lg'>Employee ID</label>
            <input type="text" id="employee_id" value={employee_id} onChange={(e) => setemployee_id(e.target.value)} className='border-b-[1px] bg-transparent border-black focus:outline-none' required />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor="password" className='text-lg'>Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-b-[1px] bg-transparent border-black focus:outline-none' required />
          </div>

          <div className='flex justify-end pt-4 hover:underline'>
            <a href="#" className='hover:text-blue-500'>Forget password?</a>
          </div>
          <div className='pt-10'>
            <button className='btn btn-info w-full text-xl font-bold text-white' type='submit'> LOGIN </button>
          </div>
        </form>
        <div className='flex gap-2 justify-center'>
          <p> User ?</p>
          <Link to="/login"> <p className='hover:underline hover:text-blue-500'>Log in </p></Link>
        </div>
      </div>
    </div>
  )
}


export default EmployeeLogin