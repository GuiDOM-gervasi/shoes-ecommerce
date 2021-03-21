import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float
    muestraimg: String
    brand: Brand!
    categories: [Category]
    models: [Model]
  }
  type Category {
    id: ID!
    name: String!
  }
  type Brand {
    id: ID!
    name: String!
  }
  type Model {
    id: ID!
    size: String!
    color: String!
  }
  extend type Query {
    loadedProducts: [Product]
  }
  type Access {
    isAdmin: Boolean!
    id: String
    accessToken: String!
    refreshToken: String!
  }

  type Logout {
    logout: Boolean
  }
`;