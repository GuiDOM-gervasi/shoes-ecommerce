import styled from "styled-components";
import { violeta, verdeDetalleTrans, blanco } from "../App/GlobalStyles";

export const StyledAdmin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  background-color: ${violeta};
  height:100%;
  div {
    width: 20%;
    height: 10rem;
    border-radius: 10px;
    border: solid ${blanco};
    background-color:${verdeDetalleTrans};
    margin: 5rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    a {
      color: ${blanco};
      text-decoration: none;
      font-weight: 750;
      font-size: 1.5rem;
      transition: transform 500ms ease;
      margin-bottom: 1rem;
      &:hover {
        transform: scale(1.1)
      }
    }
  }

  @media (max-width: 902px){
    div{
      width:35%;
    }
  }
`;
