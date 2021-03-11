import { Action, QueryUsers } from "../../types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export const INCREMENT = "INCREMENT";
export const GET_USERS = "GET_USERS";
export const LOADING = "LOADING";

export const showUsers = gql`
  {
    User {
      id
      name
    }
  }
`;

export const increment = () =>
  <Action>{
    type: INCREMENT,
  };

export const actionName = () => async (dispatch: Function) => {
  const { data, loading, refetch } = useQuery<QueryUsers>(showUsers);

  await dispatch({
    type: LOADING,
  });

  !loading &&
    dispatch({
      type: GET_USERS,
      payload: data,
    });
};
