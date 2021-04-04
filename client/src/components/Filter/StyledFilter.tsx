import styled from "styled-components";
import { blanco, negro, verdeMain, violeta } from "../../containers/App/GlobalStyles";

export const StyledFilter = styled.div`
  width:100%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;


  .filter {
    flex: 1 0 33%;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    min-width: 18rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: ${violeta};
    align-items: center;

  }

  .sale{
    background-color: ${violeta};
    min-width: 12rem;
    color: ${blanco};
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }

  select {
    appearance: none;
    min-width: 12rem;
    background-color: ${violeta};
    color: ${blanco};
    border: none;
    /* padding: 0 1em 0 0; */
    /* margin: 0; */
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }
  /* @media (max-width: 858px){
    .filter{
      width:99vw;
    }
  } */
`;
