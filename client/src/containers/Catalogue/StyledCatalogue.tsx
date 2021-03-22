import styled from "styled-components";
import { blanco, verdeMain, violeta, productWidth } from "../App/GlobalStyles";

export const StyledCatalogue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .productImg {
    width: ${productWidth}vw;
    height: ${productWidth}vw;
    object-position: 20% 90%;
    object-fit: cover;
    transition: all 300ms ease;

    &:hover {
      /* transform: scale(1.05); */
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
  a,
  a:active,
  a:focus {
    outline: none;
  }

  ul {
    padding: 5vh 0 0 0;
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    gap: 12px;
    justify-content:center;

    li {
      position: relative;
    }
    a {
      text-decoration: none;
      color: ${blanco};
      text-align: center;
      img {
        &:hover {
          -webkit-filter: blur(2px);
          filter: blur(2px);
          transition: all 300ms ease;
        }
      }
    }
  }
  .productData {
    position: absolute;
    bottom: 0;
    width: ${productWidth}vw;
    background-color: ${violeta};
    padding: 0.5vh 0 0.5vh 0;
  }
`;
