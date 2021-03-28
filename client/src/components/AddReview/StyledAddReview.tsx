import styled from "styled-components";
import {
  blanco,
  violeta,
  formWidth,
  violetaHover,
} from "../../containers/App/GlobalStyles";

export const StyledAddReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  width: ${formWidth}vw;
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
      margin: 1vh;
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
      &:disabled {
        background-color: ${violetaHover};
      }
    }
    .clip-star {
      background: ${violeta};
    }
    .empty-star {
      background: ${violetaHover};
    }
    .clip-star,
    .empty-star {
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      display: inline-block;
      height: 1.5vw;
      width: 1.5vw;
    }
  }
  @media screen and (max-width: 870px) {
    width: 90vw;
    height: 80vh;
    form {
      .addButton {
        width: 50%;
      }
    }
  }
`;
