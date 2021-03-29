import styled from "styled-components";
import {
  blanco,
  verdeMain,
  negro,
  navHeight,
  verdeDetalle,
} from "../../containers/App/GlobalStyles";

export const StyledNav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;

  nav {
    background: #151515;
    height: ${navHeight}vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .logo {
    grid-area: logo;
    color: white;
    font-size: 35px;
    line-height: 80px;
    font-weight: bold;
  }

  .searchbar {
    grid-area: searchbar;
  }
  .cart {
    grid-area: cart;
  }
  .cart,
  .logo {
    a:hover {
      .fa-shopping-cart,
      .fa-home {
        color: ${negro};
      }
    }
  }
  .fa-shopping-cart,
  .fa-home {
    color: ${verdeMain};
  }
  .lineup {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 10fr 1fr 1fr 1fr;
    grid-template-areas: ". logo . searchbar . cart .";
  }
  .linedown {
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 3fr 5fr 3fr 3fr;
    grid-template-areas: ". catalogue offers aboutus . login register";
  }
  .catalogue {
    grid-area: catalogue;
  }
  .offers {
    grid-area: offers;
  }
  .aboutus {
    grid-area: aboutus;
  }
  .login {
    grid-area: login;
  }
  .register {
    grid-area: register;
  }

  nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
  }
  nav ul li p {
    display: inline-block;
    margin-block-end: 0;
    margin-block-start: 0;
    line-height: 20px;
    cursor: pointer;
  }
  nav ul li a,
  nav ul li p {
    color: ${blanco};
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    text-transform: uppercase;
    &:hover {
      background: ${verdeDetalle};
      transition: 0.5s;
      color: ${negro};
    }
  }

  .checkbtn {
    font-size: 30px;
    color: ${blanco};
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
  }

  #check {
    display: none;
  }

  @media (max-width: 952px) {
    label.logo {
      font-size: 30px;
      padding-left: 50px;
    }
    nav ul li a {
      font-size: 16px;
    }
    nav ul {
      float: right;
      margin-right: 20px;
    }
  }

  @media (max-width: 858px) {
    .checkbtn {
      display: block;
    }
    .linedown {
      display: block;
    }
    nav {
      height: 80px;
    }
    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: ${negro};
      top: 80px;
      left: 0;
      text-align: center;
      left: -200%;
      transition: all 0.5s;
      z-index: 3;
    }

    nav ul li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }

    nav ul li a {
      font-size: 20px;
    }

    a:hover {
      background: none;
      color: ${verdeDetalle};
    }
    #check:checked ~ ul {
      left: 0;
    }
  }
`;
