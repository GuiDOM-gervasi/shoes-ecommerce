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
mutation addCategory(
  $name: String!
){
  createCategory(
    name: $name
  ){
    id
    name
  }
}
`

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

export const EDIT_CATEGORY = gql`
mutation editCategory($id:String!, $input: String!){
	updateCategory(id:$id,input: $input){
		id
	}
}
`;
