import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {singIn,updateUserProfile} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
    return (
        <div>
            
        </div>
    );
};

export default Login;