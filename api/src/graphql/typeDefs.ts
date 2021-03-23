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
    products: [Product]
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Float
    muestraimg: String
    brand: Brand
    categories: [Category!]
    models: [Model!]
    img: String
  }

  type Category {
    id: ID!
    name: String!
  }
  type Brand {
    id: ID!
    name: String!
  }

  type Image {
    id: ID!
    productId: String!
    title: String!
  }

  type Model {
    id: ID!
    size: String!
    color: String!
  }

  type Access {
    isAdmin: Boolean!
    id: String
    accessToken: String!
    refreshToken: String!
  }

  type FinalProduct {
    id: ID
    product: Product
    model: Model
  }

  type ProductForCategory {
    products: [Product!]!
  }
  type ProductModel {
    products: [Product!]!
  }

  type Cart {
    id: ID
    finalproducts: [FinalProduct]
    userId: String
    state: String
  }

  type MutationCartProduct {
    id: ID!
    finalproductId: String!
    cartId: String!
    quantity: Int
    price: Float
  }

  type Logout {
    logout: Boolean
  }

  type Review {
    id: ID
    productId: String
    userId: String
    title: String
    score: Float!
    description: String
  }

  type Reviews{
    count: Float
    average: Float
    reviews: [Review]
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
      muestraimg: String
      brandId: ID!
      CategoriesId: [String]
      ModelsId: [String]
    ): Product!
    updateProduct(id: String!, atr: String!, input: [String]): Product!
    updateUser(id: String!, atr: String!, input: String): String
    addImage(productId: String!, image: String!): Image!
    createCart(userId: String!, state: String!): Cart!
    addToCart(
      finalproductId: String!
      cartId: String!
      quantity: Int
      price: Float
    ): MutationCartProduct!
    removeFromCart(cartId: String!, finalproductId: String!): String!
    updateCategory(id: String!, input: String!): Category!
    createCategory(name: String!): Category!
    createBrand(name: String!): Brand!
    createModel(size: String!, color: String!): Model!
    deleteProduct(id: String!): Product
    deleteCategory(id: String!): Category
    undeleteProduct(id: String!): Product
    undeleteCategory(id: String!): Category
    loginUser(email: String!, password: String!): Access
    deleteUser(id: String!): String!
    undeleteUser(id: String!): String!
    addReview(productId: String!, userId: String!, title: String!, score: Float!, description: String): Review!
    updateReview(
      id: String!, 
      title: String!, 
      score: Float!, 
      description: String
      ): String
    deleteReview(id: String!): String
  }

  type Query {
    users: [User!]!
    products(atr: String, ord: String): [Product!]!
    categories(atr: String, ord: String): [Category!]!
    brand(atr: String, ord: String): [Brand!]!
    productDetail(id: String!): Product!
    models: [Model!]!
    productForCategory(name: String!): [Product!]!
    searchProducts(name: String!): [Product!]!
    logoutUser: Logout
    cart(userId: String!): [Cart]!
    finalproducts(productId: String!, modelId: String!): [FinalProduct!]!
    image(productId: String!): [Image]!
    deleted: [Product!]!
    deletedUsers: [User!]!
    getReviews(productId: String!): Reviews
  }
`;
export default typeDefs;
