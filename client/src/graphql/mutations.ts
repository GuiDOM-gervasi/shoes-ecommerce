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
    deleteProduct(id: $id) {
      id
    }
  }
`;
export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: String!) {
    deleteCategory(id: $id) {
      id
    }
  }
`;

export const UNDELETE_PRODUCT = gql`
  mutation undeleteProduct($id: String!) {
    undeleteProduct(id: $id) {
      id
    }
  }
`;
export const UNDELETE_CATEGORY = gql`
  mutation undeleteCategory($id: String!) {
    undeleteCategory(id: $id) {
      id
    }
  }
`;

export const ADD_MODEL = gql`
  mutation addModel($size: String!, $color: String!) {
    createModel(size: $size, color: $color) {
      id
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation editProduct($id: String!, $atr: String!, $input: [String]) {
    updateProduct(id: $id, atr: $atr, input: $input) {
      id
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $userName: String!
    $isAdmin: Boolean!
    $email: String!
    $password: String!
    $nlsuscribe: Boolean!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      isAdmin: $isAdmin
      email: $email
      password: $password
      nlsuscribe: $nlsuscribe
    ) {
      userName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser(
    $email: String!
    $password: String!
  ) {
    loginUser(
      email: $email
      password: $password
    ) {
      id,
      isAdmin,
      accessToken,
      refreshToken
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser($off: Boolean!){
    logoutUser(off: $off){
      Logout {
        logout
      }
    }
  }
`