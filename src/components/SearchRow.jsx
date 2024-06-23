import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function SearchRow({ index, ongoing }) {

    const [gap, setGap] = useState(ongoing?.gaps)

    useEffect(() => {
        axios.get(`http://localhost:5001/api/vaccines/${ongoing.vaccine_name}`)
            .then((response) => {
                console.log(response.data)
                switch (ongoing.completed_doses) {
                    case 0:
                        console.log("I am at case 0")
                        setGap(response.data.gaps[0])
                        break
                    case 1:
                        console.log("I am at case 1")
                        setGap(response.data.gaps[1])
                        break
                    case 2:
                        console.log("I am at case 2")
                        setGap(response.data.gaps[2])
                        break
                    case 3:
                        console.log("I am at case 3")
                        setGap(response.data.gaps[3])
                        break
                    default:
                        console.log('All doses completed')
                }
            })
            .catch((error) => {
                console.log('ami error:', error.response);
            })
    }, [ongoing.completed_doses])
    console.log(gap)

    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime(); // Get current timestamp in milliseconds
    const gapTimestamp = currentTimestamp + gap * 24 * 60 * 60 * 1000; // Add gap days in milliseconds

    const gapDate = new Date(gapTimestamp); // Convert timestamp to date
    const newDate = `${gapDate.getFullYear()}-${String(gapDate.getMonth() + 1).padStart(2, '0')}-${String(gapDate.getDate()).padStart(2, '0')}`
    console.log(newDate)

    const handleRegistration = () => {
        if (ongoing.completed_doses >= ongoing.total_doses) {


        }
        axios.patch('http://localhost:5001/api/user/ongoing/vaccines', {
            name: ongoing.name,
            nextDate: newDate,
            vaccine_name: ongoing.vaccine_name,
            completed_doses: ongoing.completed_doses,
            disease_name: ongoing.disease_name,
            nid: ongoing.nid,
            total_doses: ongoing.total_doses,
        })
            .then((response) => {
                console.log(response.data)
                Swal.fire({
                    title: 'Success!',
                    text: "Dose Updated",
                    icon: 'success',
                    showCloseButton: true,
                })
                setTimeout(() => {
                    window.location.reload()
                }, 2000)

            })
            .catch((error) => {
                console.log('ami error:', error.response);
            })


        console.log('Registration')
    }

    return (
        <tr>
            <th className='text-center  text-[16px] pl-10'> {index + 1} </th>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.disease_name} </td>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.completed_doses} </td>
            {/* calculate the next dose date */}
            <td className='text-center  text-[16px] font-semibold'>
                <button className='btn btn-sm capitalize bg-[#4FB2E5] text-white hover:bg-[#4FB2E5]' onClick={handleRegistration}>Register</button>
            </td>
        </tr>
    )
}

export default SearchRow