import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import Swal from 'sweetalert2';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [nidNumber, setNidNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/;
    if (password.length < 8) {
      setError('Password should be at least 8 characters long');
    } else if (!/[a-z]/.test(password)) {
      setError('Password should contain at least one lowercase letter');
    } else if (!/[A-Z]/.test(password)) {
      setError('Password should contain at least one uppercase letter');
    } else if (!/\d/.test(password)) {
      setError('Password should contain at least one digit');
    } else if (!pattern.test(password)) {
      setError('Password should contain at least one special character');
    }
    else {
      try {
        // Make POST request to your backend endpoint
        const response = await axios.post('http://localhost:5001/api/signup', {
          fullName,
          nidNumber,
          mobileNumber,
          dob,
          password
        });
        console.log('Response:', response.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully registered",
          showConfirmButton: false,
          timer: 2000
        });
  
        navigate('/login');
  
  
        // Log response from server
        // Clear form fields or show success message as needed
      } catch (error) {
        console.error('Error:', error.response.data); // Log any errors
        // Handle error (show error message, etc.)
        Swal.fire({
          title: error.response.data,
          // text: "That thing is still around?",
          icon: "error",
          timer: 3000,
          showConfirmButton: false,
        });
      }
      setError('');
    }

    setPassword(password);

    console.log(fullName, nidNumber, mobileNumber, dob)

    // try {
    //   // Make POST request to your backend endpoint
    //   const response = await axios.post('http://localhost:5001/api/signup', {
    //     fullName,
    //     nidNumber,
    //     mobileNumber,
    //     dob,
    //     password
    //   });
    //   console.log('Response:', response.data);
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Successfully registered",
    //     showConfirmButton: false,
    //     timer: 2000
    //   });

    //   navigate('/login');


    //   // Log response from server
    //   // Clear form fields or show success message as needed
    // } catch (error) {
    //   console.error('Error:', error.response.data); // Log any errors
    //   // Handle error (show error message, etc.)
    //   Swal.fire({
    //     title: error.response.data,
    //     // text: "That thing is still around?",
    //     icon: "error",
    //     timer: 3000,
    //     showConfirmButton: false,
    //   });
    // }
  };

  return (
    <>
      <div className='lg:h-screen md:h-screen min-h-[950px] w-full flex justify-center items-center bg-gradient-to-b from-[#e0f2fa] to-white '>
        <div className='lg:w-[552px] md:w-[400px] max-h-[800px] bg-white border-black border-[1px] rounded-xl py-10 px-10 flex flex-col gap-6'>
          <div className=' text-center text-3xl font-bold'>
            <h1> Sign Up </h1>
          </div>
          {/* Edited line: Add onSubmit event handler to the form */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> Full Name </label>
              <input type="text" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} className='border-b-[1px] border-black bg-transparent focus:outline-none' required />
            </div>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> NID Number </label>
              <input type="text"
               value={nidNumber} 
               onChange={(e) => setNidNumber(e.target.value)} className='border-b-[1px] border-black bg-transparent focus:outline-none' pattern="[0-9]*" required />
            </div>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> Mobile Number </label>
              <input type="text"
               value={mobileNumber} 
               onChange={(e) => setMobileNumber(e.target.value)} className='border-b-[1px] border-black bg-transparent focus:outline-none' pattern="[0-9]*" required />
            </div>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> Date of Birth </label>
              <input type="date" 
              value={dob} 
              onChange={(e) => setDob(e.target.value)} className='border-b-[1px] border-black bg-transparent focus:outline-none' required />
            </div>
            <div className='flex flex-col gap-4 relative'>
              <label htmlFor=""> Password</label>
              <input type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} className='border-b-[1px] border-black bg-transparent focus:outline-none' required />
              {error && <div className="error-message text-[14px] w-52 border border-gray-600 p-2 rounded-md absolute top-[69px] left-7 bg-white ">{error}</div>}
            </div>
            {/* End of edited line */}
            <div className='pt-6'>
              <button type="submit" className='btn btn-info w-full text-white text-xl'> SIGN UP </button>
            </div>
            <div className='flex gap-4 justify-center'>
              <p> Already have an account? </p>
              <Link to='/login'> <p className=' hover:underline hover:text-blue-500 '> Login here </p> </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
