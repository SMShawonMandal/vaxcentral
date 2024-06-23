import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

function AdminRoute({ children }) {
    const { user } = useContext(AuthContext);
    // console.log(user)

    if (user?.designation === 'admin') {
        return children;
    }

    return <Navigate to='/' replace />;
}

export default AdminRoute;