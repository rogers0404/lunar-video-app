const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    appointment: [Appointment]
  } 
  type Appointment {
    _id: ID
    day: String
    time: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addAppointment(day: String!, time: String!, link: String!): User
    changeAppointment(day: String!, time: String!, link: String!): User
    cancelAppointment(_id: ID): User
  }
`;

module.exports = typeDefs;