import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code){
      name,
      capital,
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

export const useCountry = (code) => {
  const { error, loading, data } = useQuery(GET_COUNTRY, {
    variables: {
      code
    }
  });

  return {
    data,
    error,
    loading
  }
}