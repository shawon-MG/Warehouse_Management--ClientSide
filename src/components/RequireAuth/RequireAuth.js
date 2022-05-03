import React from 'react';
import { useAuthState } from 'react-firebase-hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.config';


const RequireAuth = ({ children }) => {

    const [user] = useAuthState(auth);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
    }

    return children;

};

export default RequireAuth;