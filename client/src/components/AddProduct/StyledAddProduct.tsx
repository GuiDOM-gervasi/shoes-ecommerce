import styled from "styled-components";

export const StyledAddProduct = styled.div`
  width: 60vw;
  height: 80vh;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

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
`;
