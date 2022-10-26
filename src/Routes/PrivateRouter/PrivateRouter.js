import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <Spinner animation="border" variant="info" />
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRouter;