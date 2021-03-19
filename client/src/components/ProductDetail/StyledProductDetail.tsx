import styled from "styled-components";

var violeta = "#6930C3";

export const StyledProductDetail = styled.div`
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
  .photo {
    width: 50vw;
    height: 70vh;
    object-position: 20% 90%;
    object-fit: cover;
    margin: 2rem;
    position: relative;
    top: 2.5rem;
  }

  h1 {
    font-size: 4.5rem;
    position: relative;
    top: 5rem;
    width: 25rem;
    height: 15rem;
    margin: 0 3rem;
    align-self: flex-start;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .description {
    position: relative;
    top: 8rem;
    font-size: 1.3rem;
  }

  .botones {
    position: relative;
    top: 15rem;
    width: 100%;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;

    * {
      margin: 0.3rem;
    }
  }

  .precios {
    position: relative;
    top: 12rem;
    margin: 0 2rem;
    align-self: flex-start;

    h2 {
      font-size: 3rem;
      font-weight: 500;
    }
  }

  .photoDetail {
    width: 10vw;
    height: 10vw;
    object-position: 20% 90%;
    object-fit: cover;
  }

  .fondoVioleta {
    background-color: ${violeta};
    width: 100vw;
    height: 17rem;
    position: absolute;
    left: 0;
    top: 5rem;
    filter: blur(2px);
  }
`;
