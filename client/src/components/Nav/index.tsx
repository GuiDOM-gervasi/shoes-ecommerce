import React from "react";
import { NavLink } from 'react-router-dom';
import SearchBar from "../SearchBar";
import Login from "../Login";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <NavLink to="/admin/products">CRUD</NavLink>
      <NavLink to="/login">Iniciar sesión</NavLink>
      <NavLink to="/register">Registrarse</NavLink>
      <SearchBar/>
      <Login/>
    </StyledNav>
  );
}
