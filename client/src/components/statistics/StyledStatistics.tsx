import styled from "styled-components";
import { blanco, violeta, formWidth } from "../../containers/App/GlobalStyles";

export const StyledStatistics = styled.div`
  
  .crud_container{
  display: flex;
  /* flex-direction: column; */
  justify-self: center;
  justify-content: space-around;
  /* width: ${formWidth * 2}vw; */
  min-height: 30vh;
  margin: 2rem 1.5rem 0;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};/* ;ex-direction: column; */
  }
  
  .barContainer, .donutContainer{
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    canvas{
      height: 50vh !important;
      width: 100%;
    }
  }

  h3{
    text-align:center;
    text-transform:capitalize;
    padding:1rem 1.5rem;
    width: 50%;
    border-radius: 15px;
    color:${blanco};
    background-color:${violeta};
  }
  
  @media (max-width: 858px){
    .crud_container{
      flex-direction: column !important;
      .donutContainer, .barContainer{
        width: 100vw;
      }
    }
  }

`;
