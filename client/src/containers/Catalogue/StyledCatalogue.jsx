import styled from "styled-components";

export const StyledCatalogue = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .productImg {
    width: 20vw;
    margin: 1rem 2rem;
  }

  .modal {
    position: fixed;
    top: 30vh;
    left: 35vw;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    width: 30vw;
    display: flex;
    justify-content: center;
  }
`;
