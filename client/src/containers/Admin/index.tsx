import React from "react";
import { Link } from "react-router-dom";
import { StyledAdmin } from "./StyledAdmin";

export default function Admin() {
  return (
    <StyledAdmin>
      <div>
        <Link to="/admin/products">Products </Link>
        <Link to="/admin/addProduct"> Add product </Link>
      </div>
      <div>
        <Link to="/admin/category"> Categories </Link>
        <Link to="/admin/addCategory"> Add category </Link>
      </div>
      <div>
        <Link to="/admin/orders"> Orders </Link>
      </div>
      <div>
        <Link to="/admin/users"> Users </Link>
      </div>
    </StyledAdmin>
  )
}
