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
    <div className='p-8 grid md:grid-cols-2 lg:grid-cols-4'>
      {
        data.countries.map(country => {
          return(
            <div key={country.code} className="shadow-md bg-white m-4 p-4 rounded">
              <p className='font-semibold'>Country Name: <span className='font-normal'>{country.name}</span></p>
              <p className='font-semibold'>Capital City: <span className='font-normal'>{country.capital}</span></p>
              <p className='font-semibold'>Continent: <span className='font-normal'>{country.continent.name}</span></p>
              <p className='font-semibold'>Currency: <span className='font-normal'>{country.currency}</span></p>
              {
                country.languages.map((language, idx) => {
                  <small key={idx} className='font-semibold'><span>{language}</span></small>
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
