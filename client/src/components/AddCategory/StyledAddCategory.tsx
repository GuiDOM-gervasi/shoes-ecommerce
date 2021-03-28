import styled from "styled-components";
import {
  blanco,
  violeta,
  formWidth,
} from "../../containers/App/GlobalStyles";

export const StyledAddCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${formWidth}vw;
  height: 20vh;
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

    textarea {
      height: 10rem;
      width: 100%;
      resize: none;
    }
    .addButton {
      width: 10vw;
      padding: 1vh 0 1vh 0;
      border-radius: 3px;
      border: 2px solid ${violeta};
      color: ${violeta};
      font-weight: bold;
      &:hover {
        background-color: ${violeta};
        color: ${blanco};
      }
    }
  }
`;
