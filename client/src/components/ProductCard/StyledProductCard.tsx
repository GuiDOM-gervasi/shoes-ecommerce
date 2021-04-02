import styled from "styled-components";
import { blanco } from "../../containers/App/GlobalStyles";

export const StyledProductCard = styled.div`
  a {
    text-decoration: none;
    color: ${blanco};
    text-align: center;
    img {
      &:hover {
        transform: scale(1.3);
        transition: all 300ms ease;
      }
    }
  }
`;
