import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/AuthProvider";
import SearchBar from "../SearchBar";
import { StyledNav } from "./StyledNav";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();
  const { logout, isAdmin, userId } = useAuth();
  const handleClick = () => {
    const ele = document.getElementById("check") as HTMLInputElement;
    ele.checked = false;
    logout(() => history.push("/"));
  };
  const handleCheck = (url) => {
    const ele = document.getElementById("check") as HTMLInputElement;
    ele.checked = false;
    history.push(url);
  };

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
              <NavLink to="/cart" className="hover">
                <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navMobile">
          <li onClick={() => handleCheck("/")}>
            <NavLink to="">
              <i className="fas fa-home fasMobile"></i>
            </NavLink>
          </li>
          <li onClick={() => handleCheck("/cart")}>
            <NavLink to="/cart" className="hover">
              <i className="fas fa-shopping-cart fasMobile"></i>
            </NavLink>
          </li>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
          </label>
          <ul className="linedown">
            {isAdmin ? (
              <li onClick={() => handleCheck("/admin")}>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            ) : null}
            <li onClick={() => handleCheck("/")} className="catalogue">
              <NavLink to="/">Catalogue</NavLink>
            </li>
            <li onClick={() => handleCheck("/")} className="offers">
              <NavLink to="">Offers</NavLink>
            </li>
            <li onClick={() => handleCheck("/")} className="aboutus">
              <NavLink to="">About us</NavLink>
            </li>
            {userId && userId !== "0" ? (
              <li onClick={handleClick} className="login">
                <p className="hover">Logout</p>
              </li>
            ) : (
              <>
                <li onClick={() => handleCheck("/login")} className="login">
                  <NavLink to="/login" className="hover">
                    Login
                  </NavLink>
                </li>
                <li onClick={() => handleCheck("/register")} className="register">
                  <NavLink to="/register" className="hover">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </StyledNav>
  );
}
