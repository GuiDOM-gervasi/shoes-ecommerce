import styled from "styled-components";
import { blanco } from "../../containers/App/GlobalStyles";

export const StyledCartItem = styled.div`
.itemContainer {
      margin: 3rem 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      
      img, .itemData {
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
        border:none;
        color: #f11717;
        cursor: pointer;
        line-height:0;
        &:hover {
          color: #b41919;
        }
      }

      .number-input {
        // border: 1px solid #ddd;
        display: flex;
        flex-direction: row;
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
        font-family: sans-serif;
        max-width: 3rem;
        padding: 0.5rem;
        border: solid #ddd;
        border-width: 0 2px;
        font-size: 1.5rem;
        height: 2rem;
        font-weight: bold;
        text-align: center;
      }
    }
  
`;
