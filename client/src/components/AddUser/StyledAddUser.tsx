import styled from "styled-components";
import { blanco, violeta, formWidth } from "../../containers/App/GlobalStyles";

export const StyledAddUser = styled.div`
  width: ${formWidth}vw;
  height: 75vh;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${blanco};
  position: relative;
  color: ${violeta};

  form {
    height: 90%;
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
    .div_postcode,
    .div_addressnumber {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      input {
        margin-left: 3vw;
        width: 30%;
      }
    }

    input,
    textarea,
    select {
      text-align: center;
    }

    input {
      border: none;
      border-bottom: 1px solid ${violeta};
      width: 80%;
    }
    input::placeholder {
      color: ${violeta};
      opacity: 0.5;
    }
    .register {
      background-color: ${blanco};
    }
  }
  @media (max-width: 858px) {
    width: 90vw;
    height: 80vh;
    form {
      select {
        width: 75%;
      }
      .boton {
        width: 80%;
      }
    }
  }
`;
