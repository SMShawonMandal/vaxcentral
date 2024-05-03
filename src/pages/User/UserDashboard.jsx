import React, { useContext, useEffect, useState } from 'react'
import DashBoardDrawer from '../../components/DashBoardDrawer'
import LoginHeader from '../../components/LoginHeader'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import Tablerow from '../../components/Tablerow';


function UserDashboard() {

    const [vaccines, setVaccines] = useState([])
    const user = useContext(AuthContext);

    //load vaccine data

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

    // console.log(vaccines);


    // make a function tha takes the date of birth from date and calculate age

    const dateString = user?.user.dob;
    const calculateAge = (dateString) => {
        const birthDate = new Date(dateString);
        const currentDate = new Date();

        const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        const dayDiff = currentDate.getDate() - birthDate.getDate();

        let age = yearDiff;

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    };

    const age = calculateAge(dateString);
    console.log(age);

    // console.log(user?.user.dob);

    // filter vaccines according to the age of the user
    const filteredVaccines = vaccines.filter(vaccine => vaccine.minimum_age <= age && vaccine.maximum_age >= age);

    console.log(filteredVaccines);


    return (
        <div className='h-screen mb-16 bg-gradient-to-b from-[#e0f2fa] to-white flex flex-col gap-28 pt-12 items-center'>
            <div className='w-full h-[380px] flex gap-[6vw] justify-center '>
                <div className='w-[43%] h-full border border-black rounded-2xl'>

                </div>
                <div className='w-[43%] h-full border border-black rounded-2xl'>

                </div>

            </div>
            <div className='w-[60%] h-[380px] overflow-x-auto overflow-y-scroll = rounded-2xl '>
                {/* show the data in the front end using map  */}
                <h1 className='text-center text-3xl font-bold pb-10'>Suggested Vaccine</h1>
                    <table className="table table-zebra bg-[#9daab1]">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-center text-[16px] font-bold text-black' > SL </th>
                                <th className='text-center  text-[16px] font-bold text-black'>Vaccine Name</th>
                                <th className='text-center  text-[16px] font-bold text-black'>Total No of Dose</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVaccines.map((vaccine, index) => <Tablerow key={vaccine._id} index={index} vaccine={vaccine} />)}
                        </tbody>
                    </table>
            </div>


        </div>
    )
}

export default UserDashboard