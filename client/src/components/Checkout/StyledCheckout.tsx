import styled from "styled-components"
import { blanco, verdeMain, violeta, negro, productWidth, verdeDetalle, formWidth } from '../../containers/App/GlobalStyles'

export const StyledChaeckout = styled.div`
    width: ${formWidth}vw;
  height: 50vh;
  margin: 2rem auto;
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
    width: 70%;
  }
  ul li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
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
  }  
 
`
; 

 