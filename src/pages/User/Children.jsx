import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import ChildrenTableRow from '../../components/ChildrenTableRow';


function Children() {

  const { user } = useContext(AuthContext)
  const parentNid = user.nidNumber
  const [children, setChildren] = useState([]);


  console.log(user)

  useEffect(() => {
    axios.get('http://localhost:5001/api/childrens')
      .then((response) => {
        setChildren(response.data.data)
        // console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  //filter children using parentNid
  const childrens = children.filter(child => child.parentNid === parentNid)

  function handleChildSubmit(e) {
    e.preventDefault();
    const childName = e.target.childName.value;
    const childGender = e.target.childGender.value;
    const childDob = e.target.childDob.value;
    const childCertificate = e.target.childCertificate.value;
    console.log(childName, childGender, childDob, childCertificate);

    axios.post('http://localhost:5001/api/childrens', {

      childName,
      childGender,
      childDob,
      childCertificate,
      parentNid
    })

      .then((response) => {
        console.log('child added', response.data)
        document.getElementById('my_modal_3').close();
        Swal.fire({
          title: 'Success!',
          text: 'Child added successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        location.reload();
      })
      .catch((error) => {
        console.log('child not added', error.response.data)
        document.getElementById('my_modal_3').close();
        Swal.fire({
          title: 'Error!',
          text: 'Child added failed',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });
      })

  }



  return (
    <div className='flex justify-center pt-20 bg-gradient-to-b from-[#e0f2fa] to-white flex-col items-center gap-10'>
      <div className=' w-[90%] max-h-[450px]  rounded-2xl overflow-x-auto overflow-y-auto '>
        <h1 className='text-center text-3xl font-bold pb-10'>Children Registered</h1>
        <table className="table table-zebra bg-[#9daab1]">
          {/* head */}
          <thead>
            <tr>
              <th className='text-center text-[16px] font-bold text-black' > Name </th>
              <th className='text-center  text-[16px] font-bold text-black'> Date of Birth</th>
              <th className='text-center  text-[16px] font-bold text-black'>Dashboard</th>
            </tr>
          </thead>
          <tbody>
            {childrens.map((child) => <ChildrenTableRow childData={child} key={child._id}/>)}
          </tbody>
        </table>

      </div>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-primary bg-[#2F6E89]" onClick={() => document.getElementById('my_modal_3').showModal()}>Add child</button>
        <dialog id="my_modal_3" className="modal z-5">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className="modal-action flex flex-col justify-center items-center gap-5 ">

              <form className='flex flex-col gap-4 justify-center  items-start' onSubmit={(e) => handleChildSubmit(e)}>
                <div className='flex flex-col lg:flex-row md:flex-row gap-4 lg:w-[700px]  md:w-[600px] w-full items-end '>
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-full'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className="input input-bordered w-full max-w-xs" name='childName' required />
                  </div>

                  {/* dropdown menu for gender which has same height and width as other fields
                 */}
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-full flex flex-col'>
                    <label htmlFor="" >Gender</label>
                    <select className="select select-bordered " name='childGender' required>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>


                </div>
                <div className='flex flex-col lg:flex-row md:flex-row gap-4 lg:w-[700px]  md:w-[600px] w-full items-end '>
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-full'>
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" className="input input-bordered w-full max-w-xs" name='childDob' required />
                  </div>
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-full'>
                    <label htmlFor="">Birth Certificate Number ( If available )</label>
                    <input type="number" className="input input-bordered w-full max-w-xs" name='childCertificate' />
                  </div>
                </div>
                <div className='w-full flex justify-center'>
                  <button className="btn btn-primary max-w-32" type='submit'>Add Child</button>
                </div>

              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default Children