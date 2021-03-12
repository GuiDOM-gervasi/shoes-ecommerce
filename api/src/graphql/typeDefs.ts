import { Brand } from './../db/models';
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
  type Brand {
    id: ID!
    name: String!
  }

  type Mutation {
    createUser(firstName:String!): User!
    createProduct(name:String!, description:String,price:Float,brandId:ID!, CategoriesId:[String]): Product!
    createCategory(name:String!): Category!
    createBrand(name:String!): Brand!
  }

  type Query {
    users: [User!]!
    products:[Product!]!
    categories:[Category!]!
    brand:[Brand!]!
  }
`
export default typeDefs;
