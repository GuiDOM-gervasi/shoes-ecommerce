import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query Product {
    products {
      id
      name
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ProductDetail($id:String!) {
    productDetail(id:$id) {
      id
      description
      price
      name
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const SEARCH_PRODUCTS = gql`
query searchProducts($name:String!){
  searchProducts(name:$name){
    id
    name
  }
}
`;

export const GET_CATEGORIES= gql`
  query Category {
    categories {
      id
      name
      }
    }
`;

export const GET_PRODUCTS_BY_CATEGORIES = gql`
  query productForCategory($name:String) {
    productForCategory(name: $name) {
      id
      name
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;