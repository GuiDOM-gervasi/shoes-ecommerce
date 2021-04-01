import styled from "styled-components";
import { productWidth } from "../../containers/App/GlobalStyles";

export const StyledOrderHistory = styled.div`
  padding: 2rem;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: ${productWidth}vw;
        height: ${productWidth}vw;
        min-width: 15rem;
        min-height: 15rem;
        object-fit: cover;
      }

      p {
        display: flex;
        flex-direction: column;

        * {
          margin: 0.2em;
          padding: 0.1em;
        }

        *:not(:last-child) {
          border-bottom: 1px solid rgba(0, 0, 0.1);
        }
      }

      .boton {
        font-size: 0.9em;
        padding: 1em 1.5em;
        text-align: center;
      }
    }
  }
`;
