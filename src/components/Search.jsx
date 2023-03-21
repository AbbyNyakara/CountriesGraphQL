import React, { useState} from 'react';
import { useLazyQuery, gql } from '@apollo/client';

// Define the query 
const LIST_COUNTRIES_BY_CONTINENT = gql`
  query ListCountriesByContinent($continent: StringQueryOperatorInput!) {
    countries(filter: {
      continent: $continent
    }) {
      name,
      capital,
      currency
    }
  }
`

const Search = () => {

  // Country name input 
  const [ continent, setContinent ] = useState();

  // Using lazy query
  const [getCoutries, {data, loading, error, called}] = useLazyQuery(LIST_COUNTRIES_BY_CONTINENT, {variables: {
    continent
  }})

  return (
    <div>
      <input value={continent} onChange={(e) => setContinent(e.target.value)} type="text" placeholder='Filter countries by continent' className='p-2 border-none outline-none shadow-md rounded'/>
      <button onClick={getCoutries()}>Search</button>
    </div>
  )
}

export default Search;
