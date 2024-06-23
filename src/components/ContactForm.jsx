import Lottie from 'lottie-react'
import React from 'react'
import animation2 from '../assets/contact.json'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // i want to submit the form and send the data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.reset();
        console.log('submitting form')

        try {
            await axios.post('http://localhost:5001/api/contact', {
                name: name,
                email: email,
                message: message,
                subject: subject,
                phoneNumber: phoneNumber,
            })
                .then((response) => {
                    console.log(response.data.data);
                    if (response.data) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Message sent successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Message not sent',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=' lg:h-[60vh] md:h-[70vh] h-[70vh] lg:flex flex md:flex-row-reverse flex-col lg:flex-row-reverse lg:w-full justify-center items-center lg:gap-none md:gap-8 gap-4 pb-16'>
                <Lottie animationData={animation2} loop={true} className='lg:h-[400px] lg:w-[400px] md:h-[400px] md:w-[400px] sm:h-[300px] sm:w-[300px]  h-[300px] w-[300px] ' />
            <div className='lg:w-[45%] md:w-[40%] w-full '>
                <form action="" className='w-full' onSubmit=     
                {handleSubmit} > 
                    <div className='flex flex-col gap-4 justify-center items-center w-full'>
                        {/* div for name and email */}

                        <div className='flex gap-4 w-full justify-center '>
                            <input type="text" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px]  w-full lg:w-1/2 md:w-1/2 focus:outline-[#2F6E89]" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} required/>

                            <input type="email" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] w-full lg:w1/2 md:w-1/2 focus:outline-[#2F6E89]" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/>

                        </div>

                        {/* div for NUMBER and Subject */}

                        <div className='flex gap-4 justify-center w-full'>
                            <input type="text" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] w-full lg:w-1/2 md:w-1/2 focus:outline-[#2F6E89]" placeholder="Phone Number" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />

                            <input type="text" className="text-gray-700 border rounded bg-[#DCF0FA] py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px]  w-full lg:w-1/2 md:w-1/2 focus:outline-[#2F6E89]" placeholder="Subject" name ="subject" onChange={(e) => setSubject(e.target.value)}/>

                        </div>

                        <div className='flex flex-col gap-4 w-full justify-center items-center'>

                            <textarea type="text" className="bg-[#DCF0FA] text-gray-700  rounded py-3 px-4 border focus:outline-none border-none focus:outline-[#2F6E89] lg:h-[200px] md:h-[200px] h-[100px] w-full" placeholder="Message" name="message" onChange={(e) => setMessage(e.target.value)} required/>

                            <button className='btn btn-sm md:btn-md btn-info  text-md font-bold text-white w-full ' type='submit'> Contact </button>

                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default ContactForm