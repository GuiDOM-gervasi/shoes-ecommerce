import styled from "styled-components";

export const StyledNav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  height: 2.5rem;
  background-color: #151515;
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  a {
   color: #f0f0f0;
   font-weight: 800;
   text-decoration: none;
   margin: 0 3rem;
   opacity: .5;
   transition: opacity 500ms ease;

   &:hover {
     opacity: 1;
   }
  }
`;
