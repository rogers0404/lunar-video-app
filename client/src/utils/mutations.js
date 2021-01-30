import gql from 'graphql-tag';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      email
      appointment{
        day
        time
        link
      }
    }
  }
}
`;


export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      email
    }
  }
}
`;


export const ADD_APPOINTMENT = gql`
mutation addAppointment($day: String!, $time: String!, $link: String!){
  addAppointment(day:$day, time: $time, link: $link)
       {
        _id
        firstName
        lastName
        email
        appointment{
          day
          time
          link
        }
      }
  }
`;

export const CHANGE_APPOINTMENT = gql`
mutation changeAppointment($day: String!, $time: String!, $link: String!){
  changeAppointment(day:$day, time: $time, link: $link)
       {
        _id
        firstName
        lastName
        email
        appointment{
          _id
          day
          time
          link
        }
      }
  }
  `;

export const CANCEL_APPOINTMENT = gql`
mutation cancelAppointment($_id: ID){
  cancelAppointment(_id:$_id)
       {
        _id
        firstName
        lastName
        email
        appointment{
          day
          time
          link
        }
      }
  }
  `;
