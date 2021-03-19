import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    isAdmin: Boolean!
    email: String!
    password: String!
    nlsuscribe: Boolean
    products: [Product!]
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

  type ProductForCategory {
    products: [Product!]!
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      userName: String!
      isAdmin: Boolean!
      email: String!
      password: String!
      nlsuscribe: Boolean
    ): User!
    createProduct(
      name: String!
      description: String
      price: Float
      brandId: ID!
      CategoriesId: [String]
      ModelsId: [String]
    ): Product!
    updateProduct(
    id:String!
    atr:String!
    input:[String]
    ): Product! 
    updateUser(
      id: String!
      atr:String!
      input: String
    ): String
    addImage(
      idProduct: String!
      idModel: String!
      input: String
    ): String
    createCategory(name: String!): Category!
    createBrand(name: String!): Brand!
    createModel(size: String!, color: String!): Model!
    deleteProduct(id: String!): Product
    undeleteProduct(id: String!): Product
    deleteCategory(id: String!): Category
    undeleteCategory(id: String!): Category
  }

  type Query {
    users: [User!]!
    products: [Product!]!
    categories: [Category!]!
    brand: [Brand!]!
    productDetail(id: String!): Product!
    models: [Model!]!
    productForCategory(name: String!): [ProductForCategory!]!
    searchProducts(name: String!): [Product!]!
    login(email: String!, password:String!): Boolean!
  }
`;
export default typeDefs;
