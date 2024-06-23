import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

function ChildVaccineRow({ index, vaccine, children }) {
    const { user } = useContext(AuthContext)
    // console.log(user)
    const registeredVaccines = { name: children.childName, parentNid: user.nidNumber, disease_name: vaccine.disease_name, vaccine_name: vaccine.vaccine_name, total_doses: vaccine.total_dose_number, completed_doses: 0, status: 'ongoing' }


    function handleRegistration(v) {
        Swal.fire({
            title: ` Want to register for ${v.disease_name} vaccine? `,
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, register"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:5001/api/childOngoing', registeredVaccines)
                    .then((response) => {
                        Swal.fire({
                            title: "Registered!",
                            text: "Vaccine has been registered.",
                            icon: "success",
                            timer: 1500,
                            willClose: () => {window.location.reload(); }
                        });

                        // window.location.reload();
                    })
                    .catch((error) => {
                        if (error.response.status === 400) {
                            Swal.fire({
                                title: "Already Registered",
                                icon: "error"
                            });
                        } else {
                            console.log(error);
                        }
                    });


            }
        });
        
    }
    
    
    return (
        <tr>
            <th className='text-center  text-[16px]'> {index + 1} </th>
            <td className='text-center  text-[16px] font-semibold'> {vaccine.disease_name} </td>
            <td className='text-center  text-[16px] font-semibold'> {vaccine.total_dose_number} </td>
            <td>
                <button className='btn btn-sm btn-primary text-white bg-[#4FB2E5] border-none' onClick={() => handleRegistration(vaccine)}>
                    Vaccine Registration
                </button>
            </td>
        </tr>

    )
}

export default ChildVaccineRow