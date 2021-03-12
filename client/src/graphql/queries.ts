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
