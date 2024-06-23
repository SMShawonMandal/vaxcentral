import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext);
    // console.log(user)

    if (user?.designation === 'user') {
        return children;
    }

    else if (user?.designation === 'employee') {
        return <Navigate to='/' />;
    }
    else if (user?.designation === 'admin') {
        return <Navigate to='/' />;
    }

    return <Navigate to='/login' replace />;
}

export default PrivateRoute;