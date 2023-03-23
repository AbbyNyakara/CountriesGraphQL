import React, {useState} from 'react';
import { useQuery, gql, useLazyQuery} from '@apollo/client';
import { continentData } from '../data.js';

// Query for filtering countries by continent 
const FILTER_BY_CONTINENTS = gql`
  query FilterByContinents($continent: String!) {
    countries(filter: {
      continent: {eq: $continent}
    }) {
      name,
      capital,
      currency
    }
  }
`

// Filter component
const Filter = () => {
  const [continent, setContinent] = useState("all");

  const [getCountries, {error, loading, data}] = useLazyQuery(FILTER_BY_CONTINENTS, {variables: {
    continent
  }});

  return (
    <div>
      <select className='p-2 outline-none'>
      <option value="all" >All Countries</option>
        {
          continentData.map((data, index) => {
            return(
              <option value={data.code} key={index}>{data.name}</option>
            )
          })
        }
      </select>
    </div>
  )
}

export default Filter