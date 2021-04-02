import styled from "styled-components";
import { violeta, verdeDetalleTrans, blanco, verdeMain } from "../App/GlobalStyles";

export const StyledAdmin = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  background-color: ${violeta};
  min-height:82vh;
  div {
    width: 20%;
    height: 10rem;
    border-radius: 10px;
    border: solid ${verdeMain};
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
      min-width:45%;
      margin:2rem;
    }
  }
`;
