import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import { QueryUsers } from "../../types";
import { GET_PRODUCTS } from "../../graphql/queries";
import { ADD_PRODUCT } from "../../graphql/mutations";
import Catalogue from "../Catalogue";
import { Route } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import CRUDProducts from "../CRUDProducts";

interface ProductAttributes {
  name: String;
  description: String;
  price: Number;
  brandId: String;
  CategoriesId: String[];
}

function App() {
  const { data: dataQuery, loading, refetch } = useQuery<QueryUsers>(
    GET_PRODUCTS
  );
  const [mutate, { error: errorMutation, data }] = useMutation(ADD_PRODUCT);

  const handleClick = async () => {
    try {
      await mutate({
        variables: {
          name: "Nombre de Zapatillas",
          description: "Zapas de prueba",
          price: 99,
          brandId: "1",
          CategoriesId: ["1", "2"],
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  if (errorMutation) {
    console.log(errorMutation);
  }
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Route exact path="/" component={Catalogue} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/crud" component={CRUDProducts} />
    </div>
  );
}

export default App;
