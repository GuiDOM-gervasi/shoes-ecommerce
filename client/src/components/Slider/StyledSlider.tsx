import styled from "styled-components";

export const StyledSlider = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;

  div img {
    border-radius: 0;
    height: auto;
    min-height: 100%;
    margin: 0;
    padding: 0;
    min-width: 100%;
    width: auto;
    /* object-position: 0 70%;
    object-fit: cover; */
  }

  @media (max-width: 858px) {
    height: 30vh;
  }
`;
