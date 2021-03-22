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

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    createCategory(name: $name) {
      id
      name
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
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      isAdmin
      accessToken
      refreshToken
    }
  }
`;

export const EDIT_CATEGORY = gql`
  mutation editCategory($id: String!, $input: String!) {
    updateCategory(id: $id, input: $input) {
      id
    }
  }
`;
export const CREATE_CART =  gql`
mutation createCart($state:String!, $userId:String!){
createCart(state:$state,userId:$userId){
  state
  userId
}
}
`

export const ADD_TO_CART = gql`
mutation addtoCart($finalproductId:String!
$cartId: String!,
$quantity:Int,
$price: Float){
 addToCart(finalproductId:$finalproductId
cartId: $cartId
quantity: $quantity
price: $price){
    finalproductId
  price
  }
}
`

export const DELETE_TO_CART = gql`
mutation removeFromCart(
$cartId: String!
$finalproductId: String!
){
  removeFromCart(cartId:$cartId finalproductId:$finalproductId)
}
`
;

