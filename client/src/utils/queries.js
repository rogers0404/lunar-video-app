import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query {
    me {
      _id
      email
      firstName
      lastName
      appointment{
        _id
        day
        time
      }
    }
  }
`;