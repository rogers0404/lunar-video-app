import gql from 'graphql-tag';

export const ME = gql`
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
        link
      }
    }
  }
`;