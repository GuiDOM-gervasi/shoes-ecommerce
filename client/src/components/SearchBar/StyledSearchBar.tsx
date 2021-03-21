import styled from "styled-components";

export const StyledSearchBar = styled.div`
  .searchinput {
    width: 700px;
    height: 43px;
    border-radius: 6px;
  }

  @media (max-width: 952px) {
    .searchinput {
      width: 450px;
    }
  }
  .botonSearch {
    width: 43px;
    height: 43px;
    border-radius: 6px;
    background-color: #64dfdf;
    color: #f2f2f2;
  }
`;
