import React from 'react';
import useAuth from '../../../Component/Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {newRegister,updateUserProfile} = useAuth();
    const navigate = useNavigate()
    return (
        <div>
            
        </div>
    );
};

export default Register;