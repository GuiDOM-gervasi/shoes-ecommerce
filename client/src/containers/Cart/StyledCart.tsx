import styled from "styled-components";

export const StyledCart = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 9rem;
    div {
      margin: 3rem 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .buttonDelete {
        position: absolute;
        top: 0.2rem;
        right: 0.5rem;
        width: 1.5rem;
        background-color: #f11717;
        border: 0;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        &:hover {
          background-color: #c02020;
        }
      }
      img {
        width: 15rem;
      }

      input[type="number"] {
        appearance: textfield;
      }

      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }

      .number-input {
        border: 2px solid #ddd;
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
        height: 3rem;
        cursor: pointer;
        margin: 0;
        position: relative;
      }

      .number-input button:before,
      .number-input button:after {
        display: inline-block;
        position: absolute;
        content: "";
        width: 0.8rem;
        height: 2px;
        background-color: #212121;
        transform: translate(-50%, -50%);
      }
      .number-input button.plus:after {
        transform: translate(-50%, -50%) rotate(90deg);
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
  }

  footer {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    flex-direction: column;
    background-color: #c2c0c0;
    align-items: center;
    font-weight: 500;
    padding: 2rem;
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
