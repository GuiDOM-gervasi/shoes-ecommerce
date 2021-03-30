import styled from "styled-components";
import { blanco, negro, verdeMain, violeta } from "../../containers/App/GlobalStyles";

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  :root {
    --select-border: #777;
    --select-focus: ${violeta};
    --select-arrow: var(--select-border);
  }
  
  select {
    appearance: none;
    background-color: ${negro};
    color: ${blanco};
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    outline: none;
  }

  .filter {
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: ${negro};
    background-image: linear-gradient(to top, ${negro}, #000 33%);
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative; 
  }
  .filter::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: ${verdeMain};
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    justify-self: end;
  }
  select,
  .filter:after {
    grid-area: select;
  }
  select:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }

  @media (max-width: 858px){
    .filter{
      width:99vw;
    }
  }
`;
