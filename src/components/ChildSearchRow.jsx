import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ChildSearchRow({ index, ongoing }) {
  const [enable, setEnable] = useState(true)
  const [gap, setGap] = useState(0)
  const [nextDose, setNextDose] = useState(null)
  
  
  useEffect(() => {
    axios.get(`http://localhost:5001/api/vaccines/${ongoing.disease_name}`)
      .then((response) => {
        switch (ongoing.completed_doses) {
          case 0:
            setGap(response.data.first_gap)
            break
          case 1:
            setGap(response.data.second_gap)
            break
          case 2:
            setGap(response.data.third_gap)
            break
          case 3:
            setGap(response.data.fourth_gap)
            break
          default:
            console.log('All doses completed')
        }
      })
      .catch((error) => {
        console.log('ami error:', error.response.data);
      })
  }, [ongoing.disease_name, ongoing.completed_doses])

  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime(); // Get current timestamp in milliseconds
  const gapTimestamp = currentTimestamp + gap * 24 * 60 * 60 * 1000; // Add gap days in milliseconds

  const gapDate = new Date(gapTimestamp); // Convert timestamp to date
  const newDate = `${gapDate.getFullYear()}-${String(gapDate.getMonth() + 1).padStart(2, '0')}-${String(gapDate.getDate()).padStart(2, '0')}`

  const obj = {
    name: ongoing.name,
    nextDate: newDate,
    completed_doses: ongoing.completed_doses,
    disease_name: ongoing.disease_name,
    parentNid: ongoing.parentNid
  }

  useEffect(() => {
    axios.post('http://localhost:5001/api/dose/doseTraker', obj)
      .then((res => {
        console.log(res.data)
        setEnable(res.data.data.btnStatus)
      }))
      .catch((err) => {
        console.log(err)
      })
  }, [])
  // // Function to check if the button should be disabled
  const isButtonDisabled = () => {
    const now = new Date().getTime();
    return now < gapTimestamp;
  };


  const handleSelect = async () => {
    console.log(newDate);

    // Update the completed vaccine and status
    axios.patch('http://localhost:5001/api/childOngoing', obj)
      .then(async (response) => {
        console.log(response.data);
        // Fetch the updated data after the update operation is completed
        const updatedDataResponse = await axios.get('http://localhost:5001/api/childOngoing');
        const updatedData = updatedDataResponse.data;
        // Process the updated data as needed
        console.log('Updated data:', updatedData);
      })
      .catch((error) => {
        console.log('Error updating vaccine:', error.response.data);
      });

    // Update dose tracker
    axios.post('http://localhost:5001/api/doseTraker', obj)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error updating dose tracker:', error.response.data);
      });

  };


  return (
    <tr>
      <th className='text-center  text-[16px]'> {ongoing.name} </th>
      <td className='text-center  text-[16px] font-semibold'> {ongoing.disease_name} </td>
      <td className='text-center  text-[16px] font-semibold'> {ongoing.completed_doses} </td>
      {/* calculate the next dose date */}
      <td className='text-center  text-[16px] font-semibold'>
        <button className='btn btn-sm capitalize bg-[#4FB2E5] text-white hover:bg-[#4FB2E5]' onClick={handleSelect}>Enable</button>
      </td>
    </tr>
  )
}

export default ChildSearchRow