import React from "react";
import { NavLink } from 'react-router-dom';
import SearchBar from "../SearchBar";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <NavLink to="/admin/products">CRUD</NavLink>
      <NavLink to="/register">Registrarse</NavLink>
      <SearchBar/>
    </StyledNav>
  );
}
