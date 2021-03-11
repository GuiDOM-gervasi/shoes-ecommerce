import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import { QueryUsers } from "../../types";
import { GET_USERS } from "../../graphql/queries";
import { ADD_USER } from "../../graphql/mutations";

function App() {
  const { data, loading, refetch } = useQuery<QueryUsers>(GET_USERS);

  function handleSubmit() {
    const [addUser, { data }] = useMutation(ADD_USER, {});
    addUser();
    console.log(data);
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <h1 onClick={refetch}>Hello Typescript</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
      </form>
      <span>{loading ? "loading" : data}</span>
    </div>
  );
}

export default App;
