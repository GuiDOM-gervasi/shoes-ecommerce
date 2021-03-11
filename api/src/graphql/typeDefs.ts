import {gql} from 'apollo-server';

const typeDefs = gql `
  type User {
    id: ID!
    firstName: String!
  }

  type Mutation {
    createUser(firstName:String!): User!
  }

  type Query {
    users: [User!]!
  }
`
export default typeDefs;