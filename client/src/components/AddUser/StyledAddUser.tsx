import styled from "styled-components";
import { blanco, violeta, formWidth } from '../../containers/App/GlobalStyles'


export const StyledAddUser = styled.div`
  width: ${formWidth+15}vw;
  height: 65vh;
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
    height: 95%;
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

    .line{
      display: flex;
      flex-direction: row;
      jutify-content: flex-start
      align-items: flex-start
    }

    input,
    textarea,
    select {
      text-align: center;
    }

    input {
      border: none;
      border-bottom: 1px solid ${violeta};
      width: 50%;
    }
    input::placeholder {
      color: ${violeta};
      opacity: 0.5;
      font-size: 17px
    }
    .register{
      height: 3em
      background-color:${blanco};
    }
  }
  @media (max-width: 858px) {
    width: 90vw;
    height: 75vh;
    form {
      .boton {
        width: 80%;
      }
    }
  }
`;
