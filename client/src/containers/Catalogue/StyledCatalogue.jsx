import styled from "styled-components";

export const StyledCatalogue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .productImg {
    width: 15vw;
    margin: 1rem 2rem;
    transition: all 500ms ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }


  a, a:active, a:focus {
    outline: none;
  }
`;
