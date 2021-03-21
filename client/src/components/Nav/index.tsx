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
      <nav className="fullnav">
        <div>
          <ul className="lineup">
            <li className="logo">
              <NavLink to="">
              <i className="fas fa-home"></i>
              </NavLink>
            </li>
            <li className="searchbar">
              <SearchBar />
            </li>
            <li className="cart">
              <NavLink to="">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="linedown">
            <li className="catalogue">
              <NavLink to="">Catalogue</NavLink>
            </li>
            <li className="offers">
              <NavLink to="">Offers</NavLink>
            </li>
            <li className="aboutus">
              <NavLink to="">About us</NavLink>
            </li>
            <li className="login">
              <NavLink to="/login" className="hover">
                Login
              </NavLink>
            </li>
            <li className="register">
              <NavLink to="/register" className="hover">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNav>
  );
}
