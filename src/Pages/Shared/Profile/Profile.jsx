import React from 'react';
import useAuth from '../../../Component/Hooks/useAuth';
import Container from '../../../Component/Container/Container';

const Profile = () => {
    const {user} = useAuth()
    return (
        <Container>
            <div className='pt-20 mx-auto text-center '>
                <img className='w-80 mx-auto rounded-full h-80 ' src={user?.photoURL} alt="" />
                <h2 className='text-2xl font-semibold pt-5'>{user?.displayName}</h2>
                <h2 className='text-xl font-medium pt-5'>{user?.email}</h2>
            </div>
        </Container>
    );
};

export default Profile;