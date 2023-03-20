import React from 'react';
import { useParams } from 'react-router-dom';
import { useCountry } from '../hooks/useCountry';

const Country = () => {
  const {code} = useParams()
  const {error, loading, data} = useCountry(code);
  

  // console.log({
  //   error, loading, data
  // })

  // When the page is loading... 
  // if (loading) return(<div className='min-h-screen flex flex-col justify-center items-center'><img src={loadingImg} alt="" /></div>) 
  
  // // When there is an error 
  // if (error) return (
  // <div className='min-h-screen text-4xl flex flex-col justify-center items-center'>
  //     <img src={errorImg} alt="error page" className='min-w-[30rem] mb-4' />
  //     <h2>Something Went Wrong!</h2>
  //     <p className='text-xl'>{error.message}</p> 
  //   </div>
  // ) 

  return (
    <div className='min-h-screen p-8'>
      <h2 className='text-2xl pb-6 underline font-bold'>Country Details</h2>
      <p className='font-semibold text-xl'>Country Name: <span className='font-normal'>{data?.country.name}</span></p>
      <p className='font-semibold text-xl'>Capital: <span className='font-normal'>{data?.country.capital}</span></p>
      <p className='font-semibold text-xl'>Continent: <span className='font-normal'>{data?.country.continent.name}</span></p>
      <p className='font-semibold text-xl'>Currency: <span className='font-normal'>{data?.country.currency}</span></p>
      {
        data?.country.languages.map((language, index) => {
          return(
            <div key={index}>
              <p className='font-semibold text-xl'>Main Language: <span className='font-normal'>{language.name}</span></p>
              <p className='font-semibold text-xl'>Native Language: <span className='font-normal'>{language.native}</span></p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Country;
