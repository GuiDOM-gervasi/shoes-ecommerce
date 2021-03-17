import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Float
    brand: Brand!
    categories: [Category!]
    models: [Model!]
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
  
  type ProductForCategory{
  	products: [Product!]!
  }

  type Mutation {
    createUser(firstName: String!): User!
    createProduct(
      name: String!
      description: String
      price: Float
      brandId: ID!
      CategoriesId: [String]
      ModelsId: [String]
    ): Product!
    
    createCategory(name: String!): Category!
    createBrand(name: String!): Brand!
    createModel(size: String! color: String!): Model!
  }

  type Query {
    users: [User!]!
    products: [Product!]!
    categories: [Category!]!
    brand: [Brand!]!
    productDetail(id:String!): Product!
    models: [Model!]!
    productForCategory(name:String): [Product]
    searchProducts(name:String!):[Product!]!
  }
`;
export default typeDefs;
