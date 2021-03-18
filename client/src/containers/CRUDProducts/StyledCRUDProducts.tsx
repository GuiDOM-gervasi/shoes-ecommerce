import styled from "styled-components";

export const StyledCRUDProducts = styled.div`
  display: flex;
  flex-direction: column;

  ul li {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    span,
    div {
      width: 20%;
      display: flex;
      justify-content: center;
    }
  }
  button,
  .addButton {
    margin: 1rem 0;
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    align-self: center;
  }
  
`;
