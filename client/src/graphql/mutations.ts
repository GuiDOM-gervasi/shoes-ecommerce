import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $price: Float!
    $brandId: ID!
    $CategoriesId: [String]!
    $ModelsId: [String]!
  ) {
    createProduct(
      name: $name
      description: $description
      price: $price
      brandId: $brandId
      CategoriesId: $CategoriesId
      ModelsId: $ModelsId
    ) {
      name
      id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct( id: $id) {
      id
    }
  }
`;

export const UNDELETE_PRODUCT = gql`
  mutation undeleteProduct($id: String!) {
    undeleteProduct( id: $id) {
      id
    }
  }
`;

export const ADD_MODEL = gql`
  mutation addModel(
    $size: String!
    $color: String!
  ) {
    createModel(
      size: $size
      color: $color
    ) {
      id
    }
  } 
`;
