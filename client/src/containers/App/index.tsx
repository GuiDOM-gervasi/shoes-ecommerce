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
import Cart from "../Cart";
import OrderTable from "../OrderTable";
import Order from "../../components/Order";
import Loader from "../../components/Loader";
import AddReview from "../../components/AddReview";
import EditStock from "../../components/EditStock";
import CRUDUsers from "../CRUDUsers";
import CRUDStock from "../CRUDStock";

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
      <GlobalStyles />
      <Route exact path="/" component={Catalogue} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/register" component={AddUser} />
      <Route path="/login" component={Login} />
      <Route exact path="/search" component={SearchResult} />
      <Route exact path="/admin" component={isAdmin ? Admin : Login} />
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
      <Route path="/cart" component={Cart} />
      <Route path="/admin/stock" component={CRUDStock} />
      <Route exact path="/admin/orders" component={isAdmin ? OrderTable : Login} />
      <Route path="/admin/orders/:id" component={isAdmin ? Order : Login} />
      <Route path="/admin/users" component={isAdmin ? CRUDUsers : Login} />
      <Route exact path="/addReview/:id/:user" component={AddReview} />
      <Route exact path="/admin/editStock/:productId/:modelId" component={EditStock} />
    </div>
  );
}

export default App;
