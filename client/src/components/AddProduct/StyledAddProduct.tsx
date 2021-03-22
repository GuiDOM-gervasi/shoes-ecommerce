import styled from "styled-components";
import {
  blanco,
  verdeMain,
  violeta,
  negro,
  productWidth,
  verdeDetalle,
  formWidth,
} from "../../containers/App/GlobalStyles";

export const StyledAddProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${formWidth}vw;
  min-height: 20vh;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};

  form {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
      width: 80%;
      height: min-content;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input,
    textarea,
    select {
      text-align: center;
    }

    input {
      border: none;
      border-bottom: 1px solid black;
      width: 80%;
      background-color: ${blanco};
    }

    input[type="number"] {
      width: 40%;
    }

    textarea {
      height: 10rem;
      width: 100%;
      resize: none;
    }
  }

  input[type="submit"] {
    position: absolute;
    bottom: 0;
  }

  .selectsMultiple {
    display: flex;
    flex-direction: row;

    .divModels {
      width: 50%;
      select {
        width: 30%;
      }
    }
  }

  optgroup {
    color: rgba(0, 0, 0, 0.3);

    option {
      color: black;
    }
  }
`;
