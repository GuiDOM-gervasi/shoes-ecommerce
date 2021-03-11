import {gql} from 'apollo-server';

const typeDefs = gql `
  type User {
    id: ID!
    name: String!
  }

  type Mutation {
    createUser(name:String!): User!
  }

  type Query {
    users: [User!]!
  }
`
export default typeDefs;