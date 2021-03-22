import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import Catalogue from "../Catalogue";

import { Route } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import SearchResult from "../SearchResult";
import CRUDProducts from "../CRUDProducts";
import AddProduct from "../../components/AddProduct";
import CRUDCategory from "../CRUDCategory";
import AddCategory from "../../components/AddCategory";
import EditProduct from "../../components/EditProduct";
import AddUser from "../../components/AddUser";
import Login from "../../components/Login";
import EditCategory from "../../components/EditCategory";
import Admin from "../Admin";
import { useAuth } from "../../hooks/AuthProvider";

interface ProductAttributes {
  name: String;
  description: String;
  price: Number;
  brandId: String;
  CategoriesId: String[];
}

function App() {
  const { isAdmin } = useAuth();
  return (
    <div className="App fondoDegradado">
      <Nav />
      <GlobalStyles/>
      <Route exact path="/" component={Catalogue}/>
      <Route path="/product/:id" component={ProductDetail}/>
      <Route path="/register" component={AddUser} />
      <Route path="/login" component={Login} />
      <Route exact path="/search" component={SearchResult} />
      <Route
        path="/admin/products"
        component={isAdmin ? CRUDProducts : Login}
      />
      <Route
        path="/admin/addProduct"
        component={isAdmin ? AddProduct : Login}
      />
      <Route
        path="/admin/category"
        component={isAdmin ? CRUDCategory : Login}
      />
      <Route
        path="/admin/addCategory"
        component={isAdmin ? AddCategory : Login}
      />
      <Route
        path="/admin/editProduct/:productId"
        component={isAdmin ? EditProduct : Login}
      />
      <Route
        path="/admin/editCategory/:categoryId"
        component={isAdmin ? EditCategory : Login}
      />
      <Route exact path="/admin" component={Admin} />
    </div>
  );
}

export default App;
