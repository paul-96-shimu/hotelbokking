import React, { use } from 'react';
import { AuthContex } from '../../Compontents/Authprovider/Authcontext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {


    const { user, loading } = use(AuthContex)
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>


    }

    if (!user) {
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }




    return children


};

export default PrivateRoute;