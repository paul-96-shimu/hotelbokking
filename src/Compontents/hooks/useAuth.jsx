import React, { use } from 'react';
import { AuthContex } from '../Authprovider/Authcontext';

const useAuth = () => {

    const authInfo = use(AuthContex);
    return authInfo



};

export default useAuth;