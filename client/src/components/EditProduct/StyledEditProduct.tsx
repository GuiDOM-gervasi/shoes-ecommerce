import styled from "styled-components";

export const StyledEditProduct = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    width: 50vw;
    padding-inline-start: 0;
    margin: 0;
  }
  .container {
    border: 1px black solid;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .price {
  }
  .priceBefore {
    text-decoration: line-through;
  }
  .photo {
    width: 50vw;
    height: 70vh;
    object-position: 20% 90%;
    object-fit: cover;
  }
  .photoDetail {
    width: 10vw;
    height: 10vw;
    object-position: 20% 90%;
    object-fit: cover;
  }
  .boton {
    background-color: #6930c3;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    color: #f0f0f0;
    width: 60%;
    padding: 2%;
  }
  .boton:hover {
    background-color: #6930c350;
    transition: all 0.3s;
  }

  label {
    opacity: 30%;
    font-size: 0.9rem;
    font-weight: 750;
    padding: 0 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 500ms ease;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .modal {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 30%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      margin: 1rem 0;
    }
  }
`;
