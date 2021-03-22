import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query Product {
    products {
      id
      name
      muestraimg
      price
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($id: String!) {
    productDetail(id: $id) {
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
      models {
        size
        color
      }
    }
  }
`;

export const SEARCH_PRODUCTS = gql`
  query searchProducts($name: String!) {
    searchProducts(name: $name) {
      id
      name
      description
      price
      muestraimg
      brand {
        name
      }
      categories {
        name
      }
      models {
        id
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

export const GET_BRANDS = gql`
  query Brands {
    brand {
      id
      name
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORIES = gql`
  query productForCategory($name: String!) {
    productForCategory(name: $name) {
      id
      name
      price
      brand {
        name
      }
      categories {
        name
      }
    }
  }
`;

export const GET_MODELS = gql`
  query Models {
    models {
      id
      size
      color
    }
  }
`;

export const LOGOUT_USER = gql`
  query {
    logoutUser {
      logout
    }
  }
`;
