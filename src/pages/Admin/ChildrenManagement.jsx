import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function ChildrenManagement() {

  const [childrens, setChildrens] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [updateInfo, setUpdateInfo] = useState({})
  const ref = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault()
    const searchString = e.target.search.value
    axios.post(`http://localhost:5001/api/admin/children`, { searchString })
      .then((response) => {
        console.log(response.data.data)
        setChildrens(response.data.data)
      })
      .catch((error) => {
        console.log('ami error:', error.response.data);
      });
  }

  function handleEdit(e, nid) {
    e.preventDefault()

    const form = e.target

    const childName = e.target.fullname.value;
    const childGender = e.target.gender.value;
    const childCertificate = e.target.birth_certificate.value;
    const dob = e.target.dob.value;
    const parentNid = nid;

    axios.patch('http://localhost:5001/api/admin/children/edit', {
      searchChild: updateInfo.childName,
      childName,
      childGender,
      childCertificate,
      dob,
      parentNid
    })
      .then((response) => {
        console.log('Children edited', response.data)
        Swal.fire({
          title: 'Success!',
          text: 'Children Edit successfully',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          setIsModalOpen(false)
          window.location.reload();
        }, 2000)
        form.reset();
      })
      .catch((error) => {
        console.log('Children not edited', error.response)
        Swal.fire({
          title: 'Failed!',
          text: 'Children edit failed',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });

    console.log(nid)
  }


  // delete function
  function handleDelete(nid, childrenName) {

    console.log(nid)
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

        axios.delete(`http://localhost:5001/api/admin/children/delete/${nid}/${childrenName}`)
          .then((response) => {
            if (response) {
              Swal.fire({
                title: "Deleted!",
                text: "The children has been deleted.",
                icon: "success"
              });

              setChildrens(childrens.filter((c) => c.parentNid !== nid))
            }
            else {
              Swal.fire({
                title: "Failed!",
                text: "The children has not been deleted.",
                icon: "error"
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Failed!",
              text: "The children has not been deleted.",
              icon: "error"
            });
          });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "The employee is safe :)",
          icon: "error"
        });
      }
    });

  }


  return (
    <div className="p-8 bg-gradient-to-b from-[#e0f2fa] to-white min-h-screen ">
      <div className="mb-6 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Childreen Management</h2><div className='flex gap-2 justify-center items-center w-[90%] lg:w-[50%] md:w-[50%] '>
          <form action="" onSubmit={handleSearch} className=''>
            <div className='flex justify-center gap-2 '>
              <input type="text" name='search' className="input input-bordered lg:w-80 md:w-80 w-32 h-[2rem]" placeholder="Search child by parent NID" />
              <button className='btn btn-sm btn-primary w-20' type='submit' >Search</button>
            </div>
          </form>
        </div>
      </div>

      <div className="overflow-x-auto w-full flex justify-center items-center mt-10">
        <table className="table w-[90%] ">
          <thead>
            <tr>
              <th>Id</th>
              <th>children Name</th>
              <th>Mobile Number</th>
              <th className=' text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              childrens !== null ? childrens.map((children, index) => {
                return (
                  <tr key={children._id}>

                    <td>{children.childName}</td>
                    <td className='capitalize'>{children.childGender}</td>
                    <td>{children.childDob}</td>
                    <td>{children.childCertificate}</td>
                    <td className='flex gap-2 justify-center'>
                      <button className='btn btn-sm btn-primary'
                        ref={ref}
                        onClick={() => {
                          setIsModalOpen(true)
                          setUpdateInfo(children)
                        }}>Edit</button>

                      {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 w-full ">
                          <div className="bg-white p-8 rounded-lg shadow-lg lg:w-[50%] md:w-[60%] w-[70%]">

                            {/* form for edit the children details */}
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Edit children</h2>
                            {/* full name */}
                            <form onSubmit={(e) => handleEdit(e, updateInfo?.parentNid)}>

                              {/* full name */}
                              <div className="mb-4">
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                  type="text"
                                  name='fullname'

                                  // defaultValue onload
                                  defaultValue={updateInfo?.childName}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>

                              {/*Gender */}
                              <div className="mb-4">
                                <label className="block text-gray-700">Gender</label>
                                <input
                                  type="text"
                                  name="gender"

                                  // defaultValue onload
                                  defaultValue={updateInfo?.childGender}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>


                              {/* date of birth */}
                              <div className="mb-4">
                                <label className="block text-gray-700">Date of Birth</label>
                                <input
                                  type="date"
                                  name='dob'

                                  // defaultValue onload
                                  defaultValue={updateInfo?.childDob}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>


                              {/* password */}
                              <div className="mb-4">
                                <label className="block text-gray-700">Birth Certificate</label>
                                <input
                                  type="text"
                                  name='birth_certificate'

                                  // defaultValue onload
                                  defaultValue={updateInfo?.childCertificate}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>

                              {/* submit button */}
                              <div className="flex justify-center">
                                <button type="submit" className="p-2 bg-green-500 text-white rounded-md">Edit children</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 ml-2 bg-red-500 text-white rounded-md">Cancel</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      <button className='btn btn-sm btn-error text-white' ref={ref} onClick={() => {
                        setUpdateInfo(children)
                        handleDelete(children.parentNid, children.childName)
                      }}>Delete</button>
                    </td>
                  </tr>
                )
              }) : <td colSpan={4} className='text-center text-lg'>No emloyee found</td>
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ChildrenManagement