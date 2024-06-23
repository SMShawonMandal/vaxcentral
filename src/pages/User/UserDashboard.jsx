import React, { useContext, useEffect, useState } from 'react'
import DashBoardDrawer from '../../components/DashBoardDrawer'
import LoginHeader from '../../components/LoginHeader'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import Tablerow from '../../components/Tablerow';
import OngoingTableRow from '../../components/OngoingTableRow';
import CompletedTableRow from '../../components/CompletedTableRow';


function UserDashboard() {

    const [vaccines, setVaccines] = useState([])
    const [ongoingVaccines, setOngoingVaccines] = useState([])
    const [completed, setCompleted] = useState([])
    const user = useContext(AuthContext);

    console.log(user?.user?.nidNumber)
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
    }, [vaccines])

    useEffect(() => {
        axios.get(`http://localhost:5001/api/ongoing/${user?.user?.nidNumber}`)
            .then((response) => {
                console.log("Ongoing", response.data.data)
                setOngoingVaccines(response.data.data)
            })
            .catch((error) => {
                console.log('ami error:', error.response.data);
            });
    }, [ongoingVaccines])


    useEffect(() => {
        axios.get(`http://localhost:5001/api/completed/${user?.user?.nidNumber}`)
            .then((response) => {
                // console.log(response.data.data)
                setCompleted(response.data.data)
            })
            .catch((error) => {
                console.log('ami error:', error.response.data);
            });
    }, [completed])

    // function tha takes the date of birth from date and calculate age

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

    console.log(filteredVaccines, ongoingVaccines, completed);




    return (
        <div className='h-full bg-gradient-to-b from-[#e0f2fa] to-white flex flex-col lg:gap-28 md:gap-20 gap-12 items-center pt-12'>
            <div className='w-full h-full flex gap-[6vw] justify-center items-center lg:items-start md:items-start lg:flex-row md:flex-row flex-col'>
                <div className='lg:w-[43%] md:w-[43%] w-[90%] 2xl:h-[380px] lg:h-[280px] h-[320px] '>
                    <h1 className='text-center 2xl:text-3xl lg:text-xl md:text-lg text-base font-bold pb-10'>Registered Vaccine</h1>
                    <div className='h-full rounded-2xl overflow-x-auto overflow-y-auto '>
                        <table className="table table-zebra bg-[#9daab1]">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-center text-[16px] font-bold text-black' > SL </th>
                                    <th className='text-center  text-[16px] font-bold text-black'> Name</th>
                                    <th className='text-center  text-[16px] font-bold text-black'>Next Dose</th>
                                    <th className='text-center  text-[16px] font-bold text-black'>Date</th>

                                </tr>
                            </thead>
                            <tbody>
                                {ongoingVaccines.map((ongoing, index) => <OngoingTableRow key={ongoing._id} index={index} ongoing={ongoing} />)}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='lg:w-[43%] md:w-[43%] w-[90%] 2xl:h-[380px] lg:h-[280px] h-[320px] '>
                    <h1 className='text-center 2xl:text-3xl lg:text-xl md:text-lg text-base font-bold pb-10'>Completed Vaccine</h1>
                    <div className='h-full overflow-x-auto overflow-y-auto rounded-2xl'>
                        <table className="table table-zebra bg-[#9daab1]">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-center text-[16px] font-bold text-black' > SL </th>
                                    <th className='text-center  text-[16px] font-bold text-black'> Name</th>
                                    <th className='text-center  text-[16px] font-bold text-black'>Date</th>

                                </tr>
                            </thead>
                            <tbody>
                                {completed.map((completed, index) => <CompletedTableRow key={completed._id} index={index} completed={completed} />)}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
            <div className='lg:w-[60%] w-[90%] h-full pb-12'>
                {/* show the data in the front end using map  */}
                <h1 className='text-center 2xl:text-3xl lg:text-xl md:text-lg text-base font-bold pb-10'>Suggested Vaccine</h1>
                <div className='2xl:h-[380px] lg:h-[280px] h-[320px] overflow-x-auto overflow-y-auto rounded-2xl mb-12'>
                    <table className="table table-zebra bg-[#9daab1] ">
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


        </div>
    )
}

export default UserDashboard