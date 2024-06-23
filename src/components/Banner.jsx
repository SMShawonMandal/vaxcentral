import React, { useContext } from 'react'
import Lottie from "lottie-react";
import { Link } from 'react-router-dom'
import animation1 from '../assets/1.json'
import animation2 from '../assets/2.json'
import { AuthContext } from '../provider/AuthProvider';


function Banner() {
    
    const { user } = useContext(AuthContext)
    return (
        <div className="lg:h-[60vh] md:h-[60vh] sm:h-[50vh] h-[60vh] w-full  px-[10vw] flex  items-center justify-center  md:flex-row lg:flex-row flex-col-reverse bg-gradient-to-b from-[#e0f2fa] to-white">
            {/* Banner text and buttons in one div */}
            <div className='lg:w-[35vw] md:w-[35vw] w-full mb-6 '>
                <div className='flex flex-col items-start border-none text-left gap-6'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl lg:max-w-[450px] md:max-w-[450px] w-full'>VaxCentral: Your One-stop Solution for Vaccination</h1>
                    {
                        user ? <Link to='/userdashboard' className='btn btn-sm bg-[#4FB2E5] text-white hover:bg-[#4FB2E5] h-[50px] w-52 rounded-md'>Vaccine Registration</Link>
                            : <Link to='/signup' className='btn btn-sm bg-[#4FB2E5] text-white hover:bg-[#4FB2E5] h-[50px] w-52 rounded-md'>Vaccine Registration</Link>

                    }
                </div>
            </div>

            {/* In this div svg */}
            <div className='h-full mt-8 mb-20  flex justify-center items-center'>
                <Lottie animationData={animation2} loop={true} className='h-[300px] w-[400px] ' />
            </div>
        </div>
    )
}

export default Banner