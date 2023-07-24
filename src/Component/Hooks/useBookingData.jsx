import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBookingData = () => {
    const {user, loading} = useAuth()
    const {refetch, data: Bookings = []} = useQuery({
        queryKey: ["BookingData", user?.email],
        enabled:!loading,
        queryFn:async()=>{
          const res = await axios.get(`${import.meta.env.VITE_LOCALHOST_KEY}/my-college?email=${user.email}`);
        //   console.log(res.data);
          return res.data
        }
      })
      return [Bookings,refetch]
};

export default useBookingData;