import styled from "styled-components";
import { blanco, violeta, productWidth } from "../App/GlobalStyles";

export const StyledCatalogue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .productImg {
    width: ${productWidth}vw;
    height: ${productWidth}vw;
    object-position: 20% 90%;
    object-fit: cover;
    transition: all 500ms ease;

    &:hover {
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
      overflow:hidden;
    }
  }
  .productData {
    position: absolute;
    bottom: 0;
    width: ${productWidth}vw;
    background-color: ${violeta};
    padding: 0.5vh 0 0.5vh 0;
  }

  @media (max-width: 858px){
    .filter{
      width:100vw;
    }
    .productImg{
      width: 100vw;
      height:100vw;
    }
    .create, .trend, .sale{
      display:none;
    }
    .productData{
      width:100vw;
    }
    ul{
      flex-direction: column;
      padding: 2vh 0;
    }
  }
`;
