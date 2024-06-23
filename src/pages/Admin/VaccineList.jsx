import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import { BiAddToQueue } from 'react-icons/bi';

function VaccineList({ allVaccines }) {

    const [vaccines, setVaccines] = useState([allVaccines])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [updateInfo, setUpdateInfo] = useState({})
    const ref = useRef(null)


    useEffect(() => {
        axios.get('http://localhost:5001/api/vaccines')
            .then((response) => {
                // console.log(response.data.data)
                setVaccines(response.data.data)
            })
            .catch((error) => {
                console.log('ami error:', error.response.data);
            });
    }, [])


    // delete function
    function handleDelete(vaccineName) {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5001/api/admin/vaccine/delete/${vaccineName}`)
                    .then((response) => {
                        if (response) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            setVaccines(vaccines.filter((vaccine) => vaccine.vaccine_name !== vaccineName))
                        }
                        else {
                            Swal.fire({
                                title: "Failed!",
                                text: "Your vaccine has not been deleted.",
                                icon: "error"
                            });
                        }
                    })
                    .catch((error) => {
                        Swal.fire({
                            title: "Failed!",
                            text: "Your vaccine has not been deleted.",
                            icon: "error"
                        });
                    });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "The vaccine is safe :)",
                    icon: "error"
                });
            }
        });

    }

    return (
        <div className=' w-full flex flex-col items-center  '>

            <div className="overflow-x-auto w-full flex justify-center items-center mt-10">
                <table className="table w-[90%] ">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Vaccine Name</th>
                            <th>Disease Name</th>
                            <th>Total Dose</th>
                            <th>Age</th>
                            <th>Gap</th>
                            <th className=' text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            vaccines !== null ? vaccines.map((vaccine, index) => {
                                return (
                                    <tr key={vaccine._id}>

                                        <td>{index + 1}</td>
                                        <td className='capitalize w-40'>{vaccine?.vaccine_name}</td>
                                        <td className='capitalize w-56'>{vaccine?.disease_name}</td>
                                        <td>{vaccine?.total_dose_number}</td>
                                        <td>{vaccine?.minimum_age} - {vaccine?.maximum_age} year</td>
                                        <td>{vaccine?.gaps?.join(',')}</td>
                                        {/* <td><div className='flex gap-2'>
                                            <p>{vaccine?.gaps[0] !== undefined ? vaccine?.gaps[0] : 0}</p>
                                            <p>{vaccine?.gaps[1] !== undefined ? vaccine?.gaps-[1] : null}</p>
                                            <p>{vaccine?.gaps[2] !== undefined ? vaccine?.gap-[2] : null}</p>
                                            <p>{vaccine?.gaps[3] !== undefined ? vaccine?.gaps[3] : null}</p>
                                            <p>{vaccine?.gaps[4] !== undefined ? vaccine?.gaps[4] : null}</p>
                                        </div></td> */}
                                        <td className='flex gap-2 justify-center'>
                                            <button className='btn btn-sm btn-error text-white' ref={ref} onClick={() => {
                                                setUpdateInfo(vaccine)
                                                handleDelete(vaccine.vaccine_name)
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }) : <td colSpan={4} className='text-center text-lg'>No vaccine found</td>
                        }
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default VaccineList