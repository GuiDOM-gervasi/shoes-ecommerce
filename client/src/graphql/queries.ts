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