import styled from "styled-components";
import { blanco, negro, violeta } from "../../containers/App/GlobalStyles";

export const StyledCartItem = styled.div`
  .itemContainer {
    margin: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img,
    .itemData {
      width: 15rem;
    }

    input[type="number"] {
      appearance: textfield;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    .buttonDelete {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.5rem;
      border: none;
      color: #f11717;
      cursor: pointer;
      line-height: 0;
      &:hover {
        color: #b41919;
      }
    }
    .itemImage {
      position: relative;
    }
    .number-input {
      // border: 1px solid #ddd;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -10%);
      display: flex;
      flex-direction: row;
      button {
        font-size: 1.2rem;
        &:hover {
          color: ${violeta};
        }
      }
    }
    .oldPrice {
      text-decoration: line-through;
    }
    .oldPrice,
    .newPrice {
      span {
        font-weight: bold;
      }
    }
    .number-input,
    .number-input * {
      box-sizing: border-box;
    }

    .number-input button {
      outline: none;
      -webkit-appearance: none;
      background-color: transparent;
      border: none;
      align-items: center;
      justify-content: center;
      width: 3rem;
      // height: 3rem;
      cursor: pointer;
      margin: 0;
      position: relative;
    }

    .number-input input[type="number"] {
      width: 2rem;
      border: 1px solid ${negro};
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;
