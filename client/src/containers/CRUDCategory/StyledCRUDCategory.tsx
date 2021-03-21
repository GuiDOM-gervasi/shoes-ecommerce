import styled from "styled-components";
import { blanco, verdeMain, violeta, negro, productWidth, verdeDetalle, formWidth } from '../../containers/App/GlobalStyles'

export const StyledCRUDCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: ${formWidth * 2}vw;
  height: 30vh;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};

  ul li {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    span,
    div {
      width: 20%;
      display: flex;
      justify-content: center;
    }
  }
  .addButton {
    margin: 1rem 0;
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.3);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
    align-self: center;
  }
`;
