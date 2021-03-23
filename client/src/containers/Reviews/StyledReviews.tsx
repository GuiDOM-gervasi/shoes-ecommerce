import styled from "styled-components";
import {
  blanco,
  verdeMain,
  violeta,
  negro,
  violetaHover,
  productWidth,
  verdeDetalle,
  formWidth,
} from "../App/GlobalStyles";

export const StyledReviews = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  width: ${formWidth}vw;
  margin: 2rem auto;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};

`;
