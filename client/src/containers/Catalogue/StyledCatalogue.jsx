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

  .filterBar {
    height: 2rem;
    background-color: #808080;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    section {
      width: 33%;
      height: 100%;
      border-right: 1px solid #747474;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 500ms ease;

      &:hover {
        background-color: #3a3a3a;
        color: #f0f0f0;
      }
    }
  }

  a, a:active, a:focus {
    outline: none;
  }
`;
