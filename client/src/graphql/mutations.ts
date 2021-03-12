import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Float!
    $brandId: ID!
    $CategoriesId: [String]
  ) {
    createProduct(
      name: $name
      description: $description
      price: $price
      brandId: $brandId
      CategoriesId: $CategoriesId
    ) {
      name
      id
    }
  }
`;
