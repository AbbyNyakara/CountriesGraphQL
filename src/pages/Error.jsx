import React from 'react';
import errorImg from '../assets/error.gif';

const Error = () => {
  return (
    <div className='min-h-screen text-4xl flex flex-col justify-center items-center'>
      <img src={errorImg} alt="error page" className='min-w-[30rem] mb-4' />
      <h2>We've run into a yuuuuuuuuge problem!</h2>
      <p>404 - Page Not Found!</p> 
    </div>
  )
}

export default Error