import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./containers/App";
import graphClient from "./graphql";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ApolloProvider client={graphClient}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
