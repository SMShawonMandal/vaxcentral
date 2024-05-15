import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

function GuestTablerow({ index, vaccine }) {
    
    return (
        <tr>
            <th className='text-center  text-[16px]'> {index + 1} </th>
            <td className='text-center  text-[16px] font-semibold'> {vaccine.disease_name} </td>
            <td className='text-center  text-[16px] font-semibold'> {vaccine.total_dose_number} </td>       
        </tr>

    )
}

export default GuestTablerow