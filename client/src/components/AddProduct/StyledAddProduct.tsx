import styled from "styled-components";
import {
  blanco,
  violeta,
  formWidth,
} from "../../containers/App/GlobalStyles";

export const StyledAddProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${formWidth}vw;
  height: 65vh;
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
  input, textarea, .selectsMultiple{
    margin-bottom:4vh;
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
  .addButton, .crudNewButton {
      border-radius: 3px;
      border: 2px solid ${violeta};
      color: ${violeta};
      font-weight: bold;
      &:hover {
        background-color: ${violeta};
        color: ${blanco};
      }
    }
  .addButton{
    width: 10vw;
    padding: 1vh 0 1vh 0;
  }
  .crudNewButton, button{
    margin-top:1vh;
    font-size: 0.8rem;
    padding: 1vh;
  }
`;
