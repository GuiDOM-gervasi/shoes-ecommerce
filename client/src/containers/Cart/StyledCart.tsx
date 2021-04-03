import styled from "styled-components";

export const StyledCart = styled.div`
  .cartContainer {
    min-height:75vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 9vh;
  }
  .cartItem:last-of-type{
    margin-bottom:5vh;
  }
  footer {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-height: 6rem;
    flex-direction: column;
    background-color: #c2c0c0;
    align-items: center;
    font-weight: 500;
    padding: 1rem;
    height: 9rem;
    justify-content: space-between;
    button {
      width: 20rem;
      height: 2.5rem;
      padding: 0;
      &:focus {
        outline: none;
      }
    }
  }
`;
