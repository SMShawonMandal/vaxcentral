import React from 'react'

function SearchRow({index,ongoing}) {
    return (
        <tr>
            <th className='text-center  text-[16px]'> {index + 1} </th>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.disease_name} </td>
            <td className='text-center  text-[16px] font-semibold'> {ongoing.completed_doses+1} </td>
            {/* calculate the next dose date */}
            <td className='text-center  text-[16px] font-semibold'>
                <button className='btn btn-sm capitalize bg-[#4FB2E5] text-white hover:bg-[#4FB2E5]' onClick={() => handleRegistration(ongoing)}>Select</button>
            </td>             
        </tr>
    )
}

export default SearchRow