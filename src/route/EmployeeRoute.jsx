import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

function EmployeeRoute() {
  const {employee} = useContext(AuthContext);

  if(employee){
    return Children;
  }
  return <Navigate to='/employeelogin' replace />;
}

export default EmployeeRoute