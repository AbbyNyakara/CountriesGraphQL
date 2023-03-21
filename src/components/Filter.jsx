import React, {useState} from 'react';
import { useQuery, gql, useLazyQuery} from '@apollo/client';

// Query for fetching the continents
const Filter = () => {
  const [name, setName] = useState("");
  const {error, loading, data } = useQuery(GET_CONTINENTS);

  // console.log({
  //   error,
  //   loading,
  //   data
  // });

  return (
    <div>
      <select name="countries" className='p-2 shadow-md rounded'>
        <option value="" className=''>Filter by continent</option>
        {
          data?.continents.map((continent, index) => {
            return <option value="" key={index}>{continent.name}</option>
          })
        }
      </select>
    </div>
  )
}

export default Filter