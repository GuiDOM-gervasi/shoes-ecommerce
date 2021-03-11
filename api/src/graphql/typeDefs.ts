import {gql} from 'apollo-server';

const typeDefs = gql `
  type User {
    id: ID!
    firstName: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String
  }

  type Mutation {
    createUser(firstName:String!): User!
    createProduct(name:String!, description:String): Product!
  }

  # type Mutation {
  #   createProduct(name:String, description:String, price:Number): Product!
  # }

  type Query {
    users: [User!]!
  }
`
export default typeDefs;