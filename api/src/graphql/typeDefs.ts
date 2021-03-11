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

   type Category {
    id: ID!
    name: String!
  }

  type Mutation {
    createUser(firstName:String!): User!
    createProduct(name:String!, description:String,price:Float): Product!
    createCategory(name:String!): Category!
  }

  # type Mutation {
  #   createProduct(name:String, description:String, price:Number): Product!
  # }

  type Query {
    users: [User!]!
    products:[Product!]!
    categories:[Category!]!
  }
`
export default typeDefs;
