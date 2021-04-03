import styled from "styled-components";
import { blanco } from "../../containers/App/GlobalStyles";

export const StyledCartItem = styled.div`
  a {
    text-decoration: none;
    color: ${blanco};
    text-align: center;
    img {
      &:hover {
        transform: scale(1.3);
        transition: all 300ms ease;
      }
    }
  }
  .discount{
    background-color: red;   
    position: absolute;
    top: 0;
    right:0;
    color: white; 
    font-weight: bold;
    padding: 0.2rem 0.1rem 0.2rem 0.1rem
  }
`;
