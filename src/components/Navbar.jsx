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
    <div className="flex py-4 px-10 justify-between shadow-md sticky top-0 bg-gray-100">
      <h1 className='font-bold text-xl'>Countries of the World</h1>
      <Filter />
      <Search />
    </div>
  )
}

export default Navbar