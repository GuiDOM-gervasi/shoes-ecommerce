import styled from "styled-components";
import { blanco, negro, violeta } from "../../containers/App/GlobalStyles";

export const StyledWishListTable = styled.div`

  h2{
    text-align: center;
    color:#594D9E;
  }

  .productContainer{
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  min-height: 30vh;
  margin: 2rem auto;
  margin-bottom: 0;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${blanco};
  
  /* ul{
    flex-basis: 100%
  } */

  ul li {
    /* flex-basis: 100%; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    img{
        width: 8rem;
        border: solid ${violeta} 0.05rem;
        border-radius: 10px; 
      }

    img:hover {
        border: red;
        transform: scale(1.15);
        transition: all 300ms ease;
      }
    
    span,
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20rem;
      height: 5rem;
    }
    .divImg{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20rem;
      height: 9rem;
    }

  }

  .fas{
    font-size: 2rem;
    color: ${negro}
  }

  @media (max-width: 550px) {
    ul li {
      img{
        width: 8rem;
      }
    }
  }
`;
