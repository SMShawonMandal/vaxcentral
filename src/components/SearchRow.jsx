import React, { useEffect, useState } from 'react'
import axios from 'axios'

function SearchRow({ index, ongoing }) {
    const [enable, setEnable] = useState(true)
    const [gap, setGap] = useState(0)
    const [nextDose, setNextDose] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5001/api/vaccines/${ongoing.disease_name}`)
            .then((response) => {
                switch (ongoing.completed_doses) {
                    case 0:
                        setGap(response.data.first_gap)
                        break
                    case 1:
                        setGap(response.data.second_gap)
                        break
                    case 2:
                        setGap(response.data.third_gap)
                        break
                    case 3:
                        setGap(response.data.fourth_gap)
                        break
                    default:
                        console.log('All doses completed')
                }
            })
            .catch((error) => {
                console.log('ami error:', error.response.data);
            })
    }, [ongoing.disease_name, ongoing.completed_doses])

    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime(); // Get current timestamp in milliseconds
    const gapTimestamp = currentTimestamp + gap * 24 * 60 * 60 * 1000; // Add gap days in milliseconds

    const gapDate = new Date(gapTimestamp); // Convert timestamp to date
    const newDate = `${gapDate.getFullYear()}-${String(gapDate.getMonth() + 1).padStart(2, '0')}-${String(gapDate.getDate()).padStart(2, '0')}`

    const handleRegistration = () => {
        axios.patch('http://localhost:5001/api/user/ongoing/vaccines', {
            name: ongoing.name,
            nextDate: newDate,
            completed_doses: ongoing.completed_doses,
            disease_name: ongoing.disease_name,
            nid: ongoing.nid,
            total_doses: ongoing.total_doses,
        })
            .then((response) => {
                console.log(response.data)
            }
            )

        console.log('Registration')
    }

    return (
        <tr>
            <th className='text-center  text-[16px]'> {index + 1} </th>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.disease_name} </td>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.completed_doses + 1} </td>
            {/* calculate the next dose date */}
            <td className='text-center  text-[16px] font-semibold'>
                <button className='btn btn-sm capitalize bg-[#4FB2E5] text-white hover:bg-[#4FB2E5]' onClick={handleRegistration}>Register</button>
            </td>
        </tr>
    )
}

export default SearchRow