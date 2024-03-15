import React from 'react'
import error from '../assets/error.json'
import Lottie from 'lottie-react'
import LoginHeader from '../components/LoginHeader'

function Error() {
    return (
        <div>
            <LoginHeader />
            <div className='bg-gradient-to-b from-[#e0f2fa] to-white flex justify-center items-center h-[80vh]'>
                <Lottie animationData={error} loop={true} className='lg:h-[900px] lg:w-[900px] md:h-[900px] md:w-[900px] sm:h-[350px] sm:w-[350px] h-[350px] w-[350px]' />
            </div>
        </div>
    )
}

export default Error