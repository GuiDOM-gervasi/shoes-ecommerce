import React from "react";
import { NavLink } from 'react-router-dom';
import { useAuth } from "../../hooks/AuthProvider";
import SearchBar from "../SearchBar";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  const { logout } = useAuth();
  const handleClick= () => {
    logout()
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
