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

export const GET_DELETED = gql`
  query Deleted {
    deleted {
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

export const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($id: String!) {
    productDetail(id: $id) {
      id
      description
      price
      name
      muestraimg
      brand {
        name
      }
      categories {
        name
      }
      models {
        id
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

export const GET_CART = gql`
  query cart($userId: String!) {
    cart(userId: $userId) {
      id
      finalproducts {
      id
      cartproducts{
        quantity
        id
      }
      product{
          id
          name
          price
          muestraimg
        }
      }
    }
  }
`;

export const FINAL_PRODUCTS = gql`
  query finalproducts($productId: String!, $modelId: String!) {
    finalproducts(productId: $productId, modelId: $modelId) {
      id
    }
  }
`;
export const GET_REVIEWS = gql`
  query GetReviews($productId: String!) {
    getReviews(productId: $productId) {
      count
      average
      reviews {
        title
        score
        description
        id
      }
    }
  }`;
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
      userName
      email
      isAdmin
      nlsuscribe
    }
  }
`;

export const GET_DELETED_USERS = gql`
  query GetDeletedUsers {
    deletedUsers {
      id
      firstName
      lastName
      userName
      email
      isAdmin
      nlsuscribe
    }
  }
`;
