import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchRow from '../components/SearchRow';
import ChildSearchRow from '../components/ChildSearchRow';

function EmployeeDashboard() {
  const [userId, setUserId] = useState('');
  const [parentsOngoing, setparentsOngoing] = useState([])
  const [childOngoing, setChildsOngoing] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5001/api/user/search`, { userId });
      console.log(response.data);
      
      if (response.data.data === null ) {
        setparentsOngoing([])
        setChildsOngoing([])
      }
      const userOngoing = await axios.get(`http://localhost:5001/api/ongoing/${response.data.data.nidNumber}`)
      const nid = response.data.data.nidNumber
      console.log(userOngoing.data.data)
      setparentsOngoing(userOngoing.data.data)

      axios.post(`http://localhost:5001/api/allChildsOngoing`, { nid })
        .then((response) => {
          console.log("Ongoing", response.data.data)
          setChildsOngoing(response.data.data)
        })
        .catch((error) => {
          console.log('ami error:', error.response.data);
        });

    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  }


  return (
    <div className='bg-gradient-to-b from-[#e0f2fa] to-white h-screen w-full gap-10 pt-12'>
      <form onSubmit={handleSubmit}>
        <div className='flex lg:flex-row md:flex-row flex-col gap-6 lg:justify-center md:justify-center items-center md:px-5 sm:px-5 mb-10'>
          <label className="input input-bordered flex items-center gap-2  ">
            <input
              type="number"
              placeholder="Enter User Id"
              name='userId'
              onChange={(e) => setUserId(e.target.value)}
              className='lg:w-[600px] md:w-[600px] w-[320px]'
              required />
          </label>
          <button className='btn btn-primary w-20' type='submit'>Search</button>
        </div>
      </form>
      <div className='2xl:max-h-[380px] lg:max-h-[280px] max-h-[320px] flex justify-center overflow-x-auto overflow-y-auto  mb-12'>
        {
          parentsOngoing.length > 0 && parentsOngoing !== null ? <table className="table table-zebra bg-[#9daab1] w-[72%]">
            <thead>
              <tr>
                <th className='text-center text-[16px] font-bold text-black pl-10'>SL</th>
                <th className='text-center text-[16px] font-bold text-black'>Vaccine Name</th>
                <th className='text-center text-[16px] font-bold text-black'>No of Dose</th>
                <th className='text-center text-[16px] font-bold text-black'>Select</th>
              </tr>
            </thead>
            <tbody>

              {parentsOngoing.length > 0 && parentsOngoing !== null ? parentsOngoing.map((vaccine, index) =>
                <SearchRow key={index} index={index} ongoing={vaccine}></SearchRow>
              ) : <td colSpan={4} className='text-center text-lg'>No user found</td>
              }

            </tbody>
          </table> : "No user found"
        }
      </div>
      <div className='2xl:max-h-[380px] lg:max-h-[280px] max-h-[320px] flex justify-center overflow-x-auto overflow-y-auto  mb-12'>

        {childOngoing.length > 0 && childOngoing !== null ?
          <table className="table table-zebra bg-[#9daab1] w-[72%]">
            <thead>
              <tr className=''>
                <th className='text-center text-[16px] font-bold text-black pl-10'>Child Name</th>
                <th className='text-center text-[16px] font-bold text-black'>Vaccine Name</th>
                <th className='text-center text-[16px] font-bold text-black'>No of Dose</th>
                <th className='text-center text-[16px] font-bold text-black'>Select</th>
              </tr>
            </thead>
            <tbody>

              {childOngoing.length > 0 && childOngoing !== null ? childOngoing.map((vaccine, index) =>
                <ChildSearchRow key={index} index={index} ongoing={vaccine}></ChildSearchRow>
              ) : <td colSpan={4} className='text-center text-lg'>No user found</td>
              }

            </tbody>
          </table>
          : null}
      </div>
    </div>
  );
}

export default EmployeeDashboard;