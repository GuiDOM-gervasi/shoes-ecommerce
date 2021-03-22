import styled from "styled-components";

export const StyledSlider = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;

  img {
        min-width: 100%;
        height: 70vh;
        object-position: 20% 130%;
        object-fit: cover;
  }
  @media (max-width: 858px){
  }
`;
