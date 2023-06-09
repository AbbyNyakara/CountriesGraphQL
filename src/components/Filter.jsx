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
      <form action="" method="get">
        
      </form>
    </div>
  )
}

export default Filter