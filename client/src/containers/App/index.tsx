import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import Nav from "../../components/Nav";
import Catalogue from "../Catalogue";
import {Route} from "react-router-dom"
import ProductDetail from "../../components/ProductDetail"
import CRUDProducts from "../CRUDProducts";
import AddProduct from "../../components/AddProduct";
import CRUDCategory from "../CRUDCategory";
import AddCategory from "../../components/AddCategory"

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
    </div>
  );
}

export default App;
