import React from 'react';
import { useQuery, gql} from '@apollo/client';
import Search from './Search';
import Filter from './Filter';

// Query for fetching the continents
const GET_CONTINENTS = gql`
  query {
    continents {
      name
    }
  }
`

const Navbar = () => {

  

  return (
    <div>
      <h1 className=' py-4 font-bold'>Countries of the World!</h1>
      <Filter />
      <Search />
    </div>
  )
}

export default Navbar