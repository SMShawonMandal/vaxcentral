import React from 'react'

function OngoingTableRow({index,ongoing}) {
    return (
        <tr>
            <th className='text-center  text-[16px]'> {index + 1} </th>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.vaccine_name} </td>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.completed_doses+1 }th </td>
            {/* calculate the next dose date */}
            <td className='text-center  text-[16px] font-semibold'>
                {ongoing.next_dose_date !== ""  ? new Date(ongoing.next_dose_date).toLocaleDateString('en-GB') : "N/A"}
            </td>             
        </tr>
    )
}

export default OngoingTableRow