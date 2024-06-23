import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

function EmployeeRoute({ children }) {
    const { user } = useContext(AuthContext);
    // console.log(user)

    if (user?.designation === 'employee') {
        return children;
    }

    return <Navigate to='/' replace />;
}

export default EmployeeRoute;