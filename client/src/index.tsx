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
    <Router>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
