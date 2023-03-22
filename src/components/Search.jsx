import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

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


const Search = () => {
  return (
    <div>Search</div>
  )
}

export default Search