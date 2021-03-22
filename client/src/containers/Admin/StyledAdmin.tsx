import styled from "styled-components";
import { violeta } from "../App/GlobalStyles";

export const StyledAdmin = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 3rem;
    padding: 4rem;
    background-color: ${violeta}
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    a {
      color: #f0f0f0;
      text-decoration: none;
      font-weight: 750;
      font-size: 1.5rem;
      transition: transform 500ms ease;
      
      &:hover {
        transform: scale(1.1)
      }
    }
  }  
`;
