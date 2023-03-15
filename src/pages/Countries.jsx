import React from 'react';
import { useQuery, gql } from '@apollo/client';
import loadingImg from '../assets/loading.gif';
import errorImg from '../assets/error.gif';

// Fetch data on the countries

const GET_COUNTRIES = gql`
query {
	countries {
    code,
    name,
    continent{
      name
    },
    capital,
    currency,
    languages{
      name
    }
  }
}
`

const Countries = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES);

  console.log({
    error,
    loading,
    data
  });

  if (loading) return <img src={loadingImg} alt="" />
  if (error) return <img src={errorImg} alt="" />

  return (
    <div>
      {
        data.countries.map(country => {
          return(
            <div key={country.code} className="shadow-md">
              <p className='font-semibold'>Country Name: <span className='font-normal'>{country.name}</span></p>
              <p>Capital City: <span>{country.capital}</span></p>
              <p>Continent: <span>{country.continent.name}</span></p>
              <p>Currency: <span>{country.currency}</span></p>
              {
                country.languages.map((language, idx) => {
                  <small key={idx}>{language}</small>
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Countries;
