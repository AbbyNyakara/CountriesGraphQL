import React, { useState} from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const Search = () => {

  // Country name input 
  const [ name, setName ] = useState("");

  // const GET_COUNTRY_DETAILS = gql`
  //   query GetCountryDetails($name: String!){
  //     country()
  //   }
  // `


  return (
    <div>
      <input type="text" placeholder='Search for a country...' className='p-2 border-none outline-none shadow-md rounded'/>
    </div>
  )
}

export default Search