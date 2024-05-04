import React from 'react'

function Children() {
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
            {/* {ongoing.map((ongoing, index) => <OngoingTableRow key={ongoing._id} index={index} ongoing={ongoing} />)} */}
          </tbody>
        </table>

      </div>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn btn-primary bg-[#2F6E89]" onClick={() => document.getElementById('my_modal_3').showModal()}>Add child</button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="modal-action flex flex-col justify-center items-center gap-5 ">
              <form className='flex flex-col gap-4 justify-center items-center'>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className='flex flex-col lg:flex-row md:flex-row gap-4 lg:w-[140%]  md:w-[120%] items-end '>
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-[92%]'>
                    <label htmlFor="">Full Name</label>
                    <input type="text" className="input input-bordered w-full max-w-xs" />
                  </div>

                  {/* dropdown menu for gender which has same height and width as other fields
                 */}
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-[92%] flex flex-col'>
                    <label htmlFor="">Gender</label>
                    <select className="select select-bordered ">
                      <option disabled selected>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>


                </div>
                <div className='flex flex-col lg:flex-row md:flex-row gap-4 lg:w-[140%]  md:w-[120%] items-end '>
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-[92%]'>
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" className="input input-bordered w-full max-w-xs" />
                  </div>
                  <div className=' max-w-xs lg:w-[107%] md:w-[94%] w-[92%]'>
                    <label htmlFor="">Birth Certificate Number ( If available )</label>
                    <input type="text" className="input input-bordered w-full max-w-xs" />
                  </div>
                </div>

              </form>
              <button className="btn btn-primary max-w-32">Add Child</button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default Children