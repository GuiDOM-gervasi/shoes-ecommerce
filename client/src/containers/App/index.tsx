import React from "react";
<<<<<<< HEAD
import { useQuery, useMutation } from "@apollo/client";
=======
>>>>>>> master
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import Catalogue from "../Catalogue";
import { Route } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import CRUDProducts from "../CRUDProducts";
import AddProduct from "../../components/AddProduct";
import EditProduct from "../../components/EditProduct";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Route exact path="/" component={Catalogue} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/admin/products" component={CRUDProducts} />
      <Route path="/admin/addProduct" component={AddProduct} />
      <Route path="/admin/editProduct/:productId" component={EditProduct} />
    </div>
  );
}

export default App;
