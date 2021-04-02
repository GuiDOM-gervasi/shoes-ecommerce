import styled from "styled-components"
import { blanco, formWidth } from '../../containers/App/GlobalStyles'

export const StyledChaeckout = styled.div`
  width: ${formWidth}vw;
  height:43rem;
  margin: 1rem auto;
  padding: 1rem 0 1rem 0;
  border: 2px solid black;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${blanco};
  position: relative;
  flex-direction: column;
  font-weight: 500;
  
  h2{
      font-size: 1.5rem;
  }
  ul{
    width: 80%;
  }
  ul li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    span{
      width: 100%;
      display: flex;
      justify-content: center;
        
    }
  }
  .location{
      display: flex;
      flex-direction:column;
      height: 20vh;
      justify-content:space-around;
      margin: 1.5rem;
      align-items: center;
      input{
        margin: 0.5rem 0 1rem 0;
      }
  }  

  @media (max-width: 858px) {
    width: 90vw;
    form {
      .boton {
        width: 80%;
      }
    }
  }
`
; 