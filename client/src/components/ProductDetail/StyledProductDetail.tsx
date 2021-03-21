import styled from "styled-components";
import {blanco, verdeMain, violeta, productWidth} from '../../containers/App/GlobalStyles' 
const verde = (opacity) => `rgba(100, 225, 255, ${opacity})`;

export const StyledProductDetail = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    width: 50vw;
    padding-inline-start: 0;
    margin: 0;
  }
  .container {
    border: 1px black solid;
    display: flex;
    flex-direction: column;
  }
  .mainProduct {
    display: flex;
  }
  .price {
  }
  .photo {
    width: 50vw;
    height: 70vh;
    object-position: 20% 90%;
    object-fit: cover;
    margin: 2rem;
    position: relative;
    top: 2.5rem;
  }
  h1 {
    font-size: 4.5rem;
    position: relative;
    top: 5rem;
    width: 25rem;
    height: 15rem;
    margin: 0 3rem;
    align-self: flex-start;
  }
  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .description {
    position: relative;
    top: 8rem;
    font-size: 1.3rem;
  }
  .botones {
    position: relative;
    top: 15rem;
    width: 100%;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    * {
      margin: 0.3rem;
    }
  }
  .precios {
    position: relative;
    top: 12rem;
    margin: 0 2rem;
    align-self: flex-start;
    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
  }
  .photoDetail {
    width: 10vw;
    height: 10vw;
    object-position: 20% 90%;
    object-fit: cover;
  }
  .fondoVioleta {
    background-color: ${violeta};
    width: 100vw;
    height: 17rem;
    position: absolute;
    left: 0;
    filter: blur(2px);
  }
  .related {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 3rem;
    background-color: ${verde(".3")};
    h3 {
      color: ${violeta};
      margin: 1rem 0;
    }
    img {
      width: 15rem;
    }
    .photo {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: 750;
      display: inherit;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: 15rem;
      margin: 0 3rem;
      .similData {
        opacity: 0;
        background-color: rgba(0,0,0, .2);
        padding: .2rem;
        width: 15rem;
        position: absolute;
        top: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: opacity 500ms ease;
      }
      &:hover .similData {
        opacity: 1;
      }
    }
  }
  .product {
    display: flex;
  }
  .category {
    opacity: 70%;
    cursor: pointer;
    transition: opacity 500ms ease;
    &:hover {
      opacity: 100%;
    }
  }
`;