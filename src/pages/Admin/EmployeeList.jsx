import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
function EmployeeList() {

  const [employees, setEmployees] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [updateInfo, setUpdateInfo] = useState({})
  const ref = useRef(null)

  console.log(updateInfo)

  useEffect(() => {
    axios.get('http://localhost:5001/api/admin/employees')
      .then((response) => {
        // console.log(response.data.data)
        setEmployees(response.data.data)
      })
      .catch((error) => {
        console.log('ami error:', error.response.data);
      });
  }, [])

  function handleEdit(e, nid) {
    e.preventDefault()

    const form = e.target

    const fullName = e.target.fullname.value;
    const nidNumber = e.target.nidnumber.value;
    const mobileNumber = e.target.mobilenumber.value;
    const dob = e.target.dob.value;
    const password = e.target.password.value;
    console.log(fullName, nidNumber, mobileNumber, dob, password);

    axios.patch('http://localhost:5001/api/admin/employee/edit', {
      fullName,
      nidNumber,
      mobileNumber,
      dob,
      password,
      nid
    })
      .then((response) => {
        console.log('Employee edited', response.data)
        Swal.fire({
          title: 'Success!',
          text: 'Employee Edit successfully',
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
        console.log('Employee not edited', error.response)
        Swal.fire({
          title: 'Failed!',
          text: 'Employee edit failed',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      });

    console.log(nid)
  }


  // delete function
  function handleDelete(nid) {

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

        axios.delete(`http://localhost:5001/api/admin/employee/delete/${nid}`)
          .then((response) => {
            if (response) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              setEmployees(employees.filter((employee) => employee.nidNumber !== nid))
            }
            else {
              Swal.fire({
                title: "Failed!",
                text: "Your employee has not been deleted.",
                icon: "error"
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Failed!",
              text: "Your employee has not been deleted.",
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

  function handleSearch(e) {
    e.preventDefault()
    const form = e.target
    const searchStirng = e.target.search.value

    console.log(searchStirng)

    axios.get(`http://localhost:5001/api/admin/employee/search/${searchStirng}`)
      .then((response) => {
        if (response.data.data !== null) {
          console.log(response.data.data)
          setEmployees([response.data.data])
          form.reset()
        }
        else {
          setEmployees([])
        }
      })
      .catch((error) => {
        console.log('ami error:', error.response.data);
      });
  }

  function loadAllEmployeesData() {
    axios.get('http://localhost:5001/api/admin/employees')
      .then((response) => {
        // console.log(response.data.data)
        setEmployees(response.data.data)
      })
      .catch((error) => {
        console.log('ami error:', error.response.data);
      });
  }
  return (
    <div className=' w-full flex flex-col items-center  '>
      <div className='flex gap-2 justify-center items-center w-[90%] lg:w-[50%] md:w-[50%] '>
        <form action="" onSubmit={handleSearch} className=''>
          <div className='flex justify-center gap-2 '>
            <input
              type="text"
              name='search'
              className="input input-bordered lg:w-80 md:w-80 w-32 h-[2rem]"
              placeholder="Search employee by NID"
              required />
            <button className='btn btn-sm btn-primary w-20' type='submit' >Search</button>
            <button className='btn btn-sm btn-primary' onClick={loadAllEmployeesData}>All</button>
          </div>
        </form>
      </div>

      <div className="overflow-x-auto w-full flex justify-center items-center mt-10">
        <table className="table w-[90%] ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee Name</th>
              <th>Mobile Number</th>
              <th className=' text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.length > 0 && employees !== null ? employees.map((employee, index) => {
                return (
                  <tr key={employee?._id}>

                    <td>{employee?.userId}</td>
                    <td className='capitalize'>{employee?.fullName}</td>
                    <td>{employee?.mobileNumber}</td>

                    <td className='flex gap-2 justify-center'>
                      <button className='btn btn-sm btn-primary'
                        ref={ref}
                        onClick={() => {
                          setIsModalOpen(true)
                          setUpdateInfo(employee)
                        }}>Edit</button>

                      {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 w-full ">
                          <div className="bg-white p-8 rounded-lg shadow-lg lg:w-[50%] md:w-[60%] w-[70%]">

                            {/* form for edit the employee details */}
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Edit employee</h2>
                            {/* full name */}
                            <form onSubmit={(e) => handleEdit(e, updateInfo?.nidNumber)}>

                              {/* full name */}
                              <div className="mb-4">
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                  type="text"
                                  name='fullname'

                                  // defaultValue onload
                                  defaultValue={updateInfo?.fullName}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>

                              {/* nid number */}
                              <div className="mb-4">
                                <label className="block text-gray-700">NID Number</label>
                                <input
                                  type="text"
                                  name="nidnumber"

                                  // defaultValue onload
                                  defaultValue={updateInfo?.nidNumber}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>


                              {/* mobile number */}
                              <div className="mb-4">
                                <label className="block text-gray-700">Mobile Number</label>
                                <input
                                  type="text"
                                  name='mobilenumber'

                                  // defaultValue onload
                                  defaultValue={updateInfo?.mobileNumber}
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
                                  defaultValue={updateInfo?.dob}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>


                              {/* password */}
                              <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                  type="text"
                                  name='password'

                                  // defaultValue onload
                                  defaultValue={updateInfo?.password}
                                  className="w-full p-2 border border-gray-300 rounded-md"
                                />
                              </div>

                              {/* submit button */}
                              <div className="flex justify-center">
                                <button type="submit" className="p-2 bg-green-500 text-white rounded-md">Edit User</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 ml-2 bg-red-500 text-white rounded-md">Cancel</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )}
                      <button className='btn btn-sm btn-error text-white' ref={ref} onClick={() => {
                        setUpdateInfo(employee)
                        handleDelete(employee.nidNumber)
                      }}>Delete</button>
                    </td>
                  </tr>
                )
              }) : <tr>
                <td colSpan={4} className='text-center text-lg'>No employee found</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

    </div>

  )
}

export default EmployeeList