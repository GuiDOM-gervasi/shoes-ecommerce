import { useLazyQuery } from "@apollo/client";
import React from "react";
import { NavLink } from 'react-router-dom';
import { LOGOUT_USER } from "../../graphql/queries";
import SearchBar from "../SearchBar";
import { StyledNav } from "./StyledNav";

export default function Nav() {

  const [logoutUser] = useLazyQuery(LOGOUT_USER)

  const handleClick= () => {
    logoutUser()
  }
  return (
    <StyledNav>
      <NavLink to="/admin/products">CRUD</NavLink>
      <NavLink to="/login">Iniciar sesión</NavLink>
      <NavLink to="/register">Registrarse</NavLink>
      <SearchBar/>
      <p onClick={handleClick}>Logout</p>
    </StyledNav>
  );
}
