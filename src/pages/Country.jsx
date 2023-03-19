import React from 'react';
import { useCountry } from '../hooks/useCountry';


const Country = () => {

  const { error, loading, data } = useCountry("HT");

  console.log({
    error,
    loading,
    data
  })

  return (
    <div className='min-h-screen p-8'>
      Country
    </div>
  )
}

export default Country