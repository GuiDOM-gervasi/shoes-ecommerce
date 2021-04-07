import styled from "styled-components";

export const StyledSlider = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;

  img {
        width: 100vw;
        height: 100%;
        border-radius:0;
        object-position: 0 70%;
        object-fit: cover;
  }
  @media (max-width: 858px){
  }
`;
