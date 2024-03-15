import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full flex justify-center items-center bg-gradient-to-b from-[#e0f2fa] to-white '>
        <div className='lg:w-[552px] md:w-[400px] max-h-[800px] bg-white border-black border-[1px] rounded-xl py-10 px-10 flex flex-col gap-6'>
          <div className=' text-center text-3xl font-bold'>
            <h1> Sign Up </h1>
          </div>
          <form action="" className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> Full Name </label>
              <input type="text" className='border-b-[1px] border-black bg-transparent focus:outline-none' />
            </div>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> NID Number </label>
              <input type="text" className='border-b-[1px] border-black bg-transparent focus:outline-none' />
            </div>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> Mobile Number </label>
              <input type="text" className='border-b-[1px] border-black bg-transparent focus:outline-none' />
            </div>
            <div className='flex flex-col gap-4 '>
              <label htmlFor=""> Date of Birth </label>
              <input type="date" className='border-b-[1px] border-black bg-transparent focus:outline-none' />
            </div>
          </form>
          <div className='pt-6'>
            <button className='btn btn-info w-full text-white text-xl'> SIGN UP </button>
          </div>
          <div className='flex gap-4 justify-center'>
            <p> Already have an account? </p>
            <Link to='/login'> <p className=' hover:underline hover:text-blue-500 '> Login here </p> </Link>   
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup