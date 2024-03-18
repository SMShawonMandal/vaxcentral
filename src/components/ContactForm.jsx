import Lottie from 'lottie-react'
import React from 'react'
import animation2 from '../assets/contact.json'

function ContactForm() {
    return (
        <div className=' lg:h-[60vh] md:h-[90vh] lg:flex flex flex-col lg:flex-row-reverse lg:w-full justify-center items-center lg:gap-none md:gap-8 gap-4 pb-16'>
            <div className='flex lg:justify-start justify-center items-start lg:w-1/3 '>
                <Lottie animationData={animation2} loop={true} className='lg:h-[500px] lg:w-[500px] md:h-[400px] md:w-[400px] sm:h-[300px] sm:w-[300px] h-[300px] w-[300px] ' />
            </div>
            <div className='lg:w-2/3 w-full '>
                <form action="" className=''>
                    <div className='flex flex-col gap-4 justify-center items-center w-full'>
                        {/* div for name and email */}

                        <div className='flex gap-4 w-full justify-center '>
                            <input type="text" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] lg:w-[30%] md:w-[30%] w-[40%] focus:outline-[#2F6E89]" placeholder="Name" />

                            <input type="email" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] lg:w-[30%] md:w-[30%] w-[40%] focus:outline-[#2F6E89]" placeholder="Email" />

                        </div>

                        {/* div for NUMBER and Subject */}

                        <div className='flex gap-4 justify-center w-full'>
                            <input type="text" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] lg:w-[30%] md:w-[30%] w-[40%] focus:outline-[#2F6E89]" placeholder="Phone Number" />

                            <input type="text" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] lg:w-[30%] md:w-[30%] w-[40%] focus:outline-[#2F6E89]" placeholder="Subject" />

                        </div>

                        <div className='flex flex-col gap-4 w-full justify-center items-center'>

                            <textarea type="text" className="bg-[#DCF0FA] text-gray-700 border rounded py-3 px-4  focus:outline-none border-none focus:outline-[#2F6E89] lg:h-[200px] md:h-[200px] h-[100px] md:w-[62%] lg:w-[62%] w-[85%]" placeholder="Message" />

                            <button className='btn btn-sm md:btn-md btn-info  text-md font-bold text-white md:w-[62%] lg:w-[62%] w-[85%] ' type='submit'> Contact </button>

                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactForm