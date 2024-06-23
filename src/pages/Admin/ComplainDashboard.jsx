
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ComplainDashboard() {
  const [complains, setComplains] = useState([])

  useEffect(() => {
    axios.post('http://localhost:5001/api/admin/complains')
      .then((response) => {
        // console.log(response.data.data)
        setComplains(response.data.data)
      })
      .catch((error) => {
        console.log('ami error:', error.response.data);
      });
  }, [complains])

  return (
    <div className="p-8 bg-gradient-to-b from-[#e0f2fa] to-white min-h-screen ">
      <div className="mb-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Complains</h2>
      </div>
      <div className='flex lg:flex-row flex-col gap-4 w-full justify-center items-center'>
        {complains.map((complain) => 
          <div key={complain._id} className="bg-white shadow-md rounded-md p-4 mb-4 w-[90%] lg:w-[45%] text-gray-500">
            <p className="mb-2">User Name: {complain?.name}</p>
            <p className="mb-2">Phone Number: {complain.phoneNumber}</p>
            <p className="mb-2">Complain : {complain.message}</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default ComplainDashboard