import React from "react";
// import { useQuery, useMutation } from "@apollo/client";
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import Catalogue from "../Catalogue";
import {Route} from "react-router-dom"
import ProductDetail from "../../components/ProductDetail"
import CRUDProducts from "../CRUDProducts";
import AddProduct from "../../components/AddProduct";
import CRUDCategory from "../CRUDCategory";
import AddCategory from "../../components/AddCategory"
import EditProduct from "../../components/EditProduct";
import EditCategory from "../../components/EditCategory";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles/>
      <Route exact path="/" component={Catalogue}/>
      <Route  path="/product/:id" component={ProductDetail}/>
      <Route path="/admin/products" component={CRUDProducts} />
      <Route path="/admin/addProduct" component={AddProduct} />
      <Route  path="/admin/category" component={CRUDCategory} />
      <Route path="/admin/addCategory" component={AddCategory} />
      <Route path="/admin/editProduct/:productId" component={EditProduct} />
      <Route path="/admin/editCategory/:categoryId" component={EditCategory} />
    </div>
  );
}

export default App;
