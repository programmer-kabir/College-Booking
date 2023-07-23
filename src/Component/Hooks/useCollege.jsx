import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCollege = () => {
    const {refetch, data: colleges = [], isLoading:loading} = useQuery({
        queryKey: ["colleges"],
        queryFn:async()=>{
          const res = await fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/college`);
          return res.json(
          );
        }
      })
      return [colleges,loading,refetch]
};

export default useCollege;