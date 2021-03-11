import gql from "graphql-tag";

export const GET_USERS = gql`
  {
    User {
      id
      name
    }
  }
`;
