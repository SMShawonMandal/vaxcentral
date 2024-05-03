import React from 'react'

function CompletedTableRow({completed, index}) {
    return (
        <tr>
            <th className='text-center  text-[16px]'> {index + 1} </th>
            <td className='text-center  text-[16px] font-semibold'> {completed.disease_name} </td>
            <td className='text-center  text-[16px] font-semibold'> {new Date(completed.completion_date).toLocaleDateString('en-GB')} </td>
                
        </tr>
    )
}

export default CompletedTableRow