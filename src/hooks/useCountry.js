import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query GetCountry($code: ID!){
    country(code: $code){
      name,
      capital,
      currency,
      continent{
        name
      },
      languages{
        name,
        native
      }
    }
  }
`

// Create the function 

export const useCountry = (code) => {
  const { error, loading, data } = useQuery(GET_COUNTRY, {variables: {
    code
  }});

  return {
    error, loading, data
  }
}