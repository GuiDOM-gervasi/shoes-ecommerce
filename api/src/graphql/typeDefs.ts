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
    price: Float
  }

  type Mutation {
    createUser(firstName:String!): User!
    createProduct(name:String!, description:String,price:Float): Product!
  }

  # type Mutation {
  #   createProduct(name:String, description:String, price:Number): Product!
  # }

  type Query {
     sers: [User!]!
    products:[Product!]! 
  }
`
export default typeDefs;
