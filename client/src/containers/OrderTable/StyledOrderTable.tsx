import styled from "styled-components";

export const StyledOrderTable = styled.div`
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
    select {
      width: 15%;
      display: flex;
      justify-content: center;
      text-align: center;
    }

    button {
      margin: 1rem 0;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      align-self: center;
    }
  }

  .titles * {
    font-weight: 1000;
    font-size: 1.2em;
  }

  ul li + li {
    .product {
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  p.product,
  p.model,
  p.quantity,
  p.price,
  p.state,
  p.username {
    display: none;
  }
  @media (max-width: 858px) {
    ul li {
      width:90vw;
      margin:3vh auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:5vw;
      grid-template-rows:1fr 1fr 1fr;
      span, select{
        width:100%;
        flex-direction:column;
        align-items:flex-start;
      }
    }
    .titles {
      display: none;
    }
    p.product,
    p.model,
    p.quantity,
    p.price,
    p.state,
    p.username {
      display: inline;
      font-weight:bold;
    }
  }
`;
