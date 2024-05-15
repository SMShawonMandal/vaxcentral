import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import Tablerow from './Tablerow'
import GuestTablerow from './GuestTableRow'
function SearchBar() {

    const [guestDob, setGuestDob] = useState('')
    const [filteredVaccines, setFilteredVaccines] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitting Guest Dob')

        try {
            axios.post('http://localhost:5001/api/guest', {
                guestDob: guestDob
            })
                .then((response) => {
                    console.log(response.data.data)
                    setFilteredVaccines(response.data.data);
                    if (response.data) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Search complete',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'No vaccine Available',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            console.log(guestDob)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(filteredVaccines);




    return (
        <div className='h-screen'>
            <div className=' text-lg font-bold text-[#2F6E89] flex gap-4 justify-center items-center'>
                <label htmlFor="">Date of Birth</label>
            </div>
            <form action="" className='' onSubmit={handleSubmit}>
                <div className=' h-[15vh]  flex gap-4 justify-center items-center'>
                    <input type="date" className="appearance-none block  bg-[#DCF0FA] text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none border-none lg:h-[50px] md:h-[50px] h-[40px] lg:w-[30vw] md:w-[30vw] w-[50vw] focus:outline-[#2F6E89]" placeholder="Select Date" name='guestDob' onChange={(e) => setGuestDob(e.target.value)} />

                    <button className='btn btn-sm md:btn-md btn-info  text-md font-bold text-white' type='submit'> Search </button>
                </div>
            </form>

            <div className='flex w-full justify-center'>
                <table className="table table-zebra bg-[#9daab1] w-[70%] ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-center text-[16px] font-bold text-black' > SL </th>
                            <th className='text-center  text-[16px] font-bold text-black'>Vaccine Name</th>
                            <th className='text-center  text-[16px] font-bold text-black'>Total No of Dose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredVaccines.map((vaccine, index) => <GuestTablerow key={vaccine._id} index={index} vaccine={vaccine} />)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SearchBar