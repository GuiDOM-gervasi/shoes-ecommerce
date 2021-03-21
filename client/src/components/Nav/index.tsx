import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <nav className="fullnav">
        <div>
          <ul className="lineup">
            <li className="logo">
              <NavLink to="">Home</NavLink>
            </li>
            <li className="searchbar">
              <SearchBar />
            </li>
            <li className="cart">
              <NavLink to="" className="hover">
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
              <NavLink to="" className="hover">
                Login
              </NavLink>
            </li>
            <li className="register">
              <NavLink to="" className="hover">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNav>
  );
}
