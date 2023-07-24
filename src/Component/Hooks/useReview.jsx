import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useReview = () => {
    const {refetch, data: reviews = [], isLoading:loading} = useQuery({
        queryKey: ["reviews"],
        queryFn:async()=>{
          const res = await fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/review`);
          return res.json(
          );
        }
      })
      return [reviews,loading,refetch]
};

export default useReview;