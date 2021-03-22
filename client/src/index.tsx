import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./containers/App";
import graphClient from "./graphql";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthProvider";
// import {  NormalizedCacheObject } from "@apollo/client";

ReactDOM.render(
  <ApolloProvider client={graphClient}>
    <AuthProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </AuthProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
