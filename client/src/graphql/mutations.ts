import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation AddUser($type: User!) {
    createUser(type: $type) {
      id
      name
    }
  }
`;
