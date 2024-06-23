import React, { useState } from 'react'
import VaccineList from './VaccineList';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BiAddToQueue } from 'react-icons/bi';

function VaccineManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vaccines, setVaccines] = useState({});
    const [gaps, setGaps] = useState(0)
    const [totalFiels, setTotalFiels] = useState([])
    const [fieldValues, setFieldValues] = useState([])

    function handleVaccineAdd(e) {
        e.preventDefault();
        const form = e.target;

        const vaccine_name = e.target.vaccineName.value;
        const disease_name = e.target.diseaseName.value;
        const minimum_age = e.target.minAge.value;
        const total_dose_number = e.target.totalDose.value;
        const maximum_age = e.target.maxAge.value;
        const gap = e.target.gap.value;

        const gaps = fieldValues.map((item, index) => { return item; })
        console.log(gaps)

        axios.post('http://localhost:5001/api/admin/vaccine/add', {
            vaccine_name,
            disease_name,
            total_dose_number: parseInt(total_dose_number),
            maximum_age: parseInt(maximum_age),
            minimum_age: parseInt(minimum_age),
            gaps: gaps
        })
            .then((response) => {
                if (response.data.data) {
                    console.log('Vaccine added', response.data)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Vaccine added successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setTimeout(() => {
                        form.reset();
                        setIsModalOpen(false)
                        window.location.reload();
                    }, 2000)
                }
            })
            .catch((error) => {
                console.log('Vaccine not added', error.response.data.message)
                Swal.fire({
                    title: 'Error!',
                    text: error.response.data.message,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                });
            });

    }



    function handleAddGap ()  {
        console.log("clicked")
        console.log(gaps)
        const arr = [...Array(gaps).keys()]
        console.log(arr)
        setTotalFiels(arr)
    }

    function handleGapChange (e, index) {
        const { value } = e.target
        console.log(value, index)
        const arr = fieldValues
        arr[index] = parseInt(value)
        setFieldValues(arr)
    }


    console.log(gaps, totalFiels)


    return (
        <div className="p-8 bg-gradient-to-b from-[#e0f2fa] to-white min-h-screen ">
            <div className="mb-6 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Vaccine Management</h2>
                <div className="flex mb-6">
                    <button onClick={() => setIsModalOpen(true)
                    } className="p-2 bg-blue-500 text-white rounded-md">Add Vaccine</button>
                </div>
            </div>


            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 w-full z-20">
                    <div className="bg-white p-8 rounded-lg shadow-lg lg:w-[50%] md:w-[60%] w-[70%]  h-[500px]  ">

                        {/* form for edit the vaccine details */}
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Edit vaccine</h2>
                        {/* full name */}
                        <form onSubmit={(e) => handleVaccineAdd(e)}>


                            <div className='flex gap-2'>
                                {/* Vaccine name */}
                                <div className="w-1/2 mb-4">
                                    <label className="block text-gray-700">Vaccine Name</label>
                                    <input
                                        type="text"
                                        name='vaccineName'
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                                {/* Disease Name */}
                                <div className="w-1/2 mb-4">
                                    <label className="block text-gray-700">Disease Name</label>
                                    <input
                                        type="text"
                                        name="diseaseName"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>



                            <div className='flex gap-2'>
                                {/* total dose number */}
                                <div className="w-1/3 mb-4">
                                    <label className="block text-gray-700">Total Dose</label>
                                    <input
                                        type="number"
                                        name='totalDose'
                                        onChange={(e) => setGaps(parseInt(e.target.value) - 1)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>


                                {/* minimum age */}
                                <div className="w-1/3 mb-4">
                                    <label className="block text-gray-700">Minimum Age</label>
                                    <input
                                        type="number"
                                        name='minAge'
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                {/* maximum age */}
                                <div className="w-1/3 mb-4">
                                    <label className="block text-gray-700">Maximum Age</label>
                                    <input
                                        type="number"
                                        name='maxAge'
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                            </div>



                            <div className='flex flex-wrap gap-2 items-center'>
                                {/* first gap */}
                                {totalFiels.length > 0 ? totalFiels.map((el, index) => <div key={index} className="w-1/3 mb-4">
                                    <label className="block text-gray-700">Gap {el + 1}</label>
                                    <input
                                        type="number"
                                        name="gap"

                                        // defaultValue onload
                                        // defaultValue={updateInfo?.first_gap}
                                        onChange={(e) => handleGapChange(e, index)}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>) : ""}
                                <div className='btn btn-primary btn-circle' onClick={() => handleAddGap()}><BiAddToQueue className='text-xl'></BiAddToQueue></div>
                            </div>

                            {/* submit button */}
                            <div className="flex justify-center">
                                <button type="submit" className="p-2 bg-green-500 text-white rounded-md">Add vaccine</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 ml-2 bg-red-500 text-white rounded-md">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <VaccineList allVaccines={vaccines}></VaccineList>
        </div>
    );
}

export default VaccineManagement