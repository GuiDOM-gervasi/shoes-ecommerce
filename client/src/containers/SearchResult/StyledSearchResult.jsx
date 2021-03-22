import styled from "styled-components";
import {blanco, verdeMain, violeta, productWidth} from '../App/GlobalStyles'


export const StyledSearchResult = styled.div`
  min-height:100vh;
  display: flex;
  justify-content:center;
  .filterBar{
    ul{
      padding:5vh 0 0 0;
      display: flex;
      gap: 12px;
      justify-content:center;
      flex-flow: row wrap;
      list-style:none;
      li{
        padding:0 1vw 0 1vw;
        position: relative;
      }
      a{
        text-decoration:none;
        color:${blanco};
        text-align:center;
        img {
          &:hover{
            -webkit-filter: blur(2px);
            filter: blur(2px);
            transition: all 300ms ease;
          }
        }
      }
    }
  }
  .productImg {
    width: ${productWidth}vw;
    height: ${productWidth}vw;
    object-position: 20% 90%;
    object-fit: cover;
    transition: all 500ms ease;
  }
  .productData{
    position: absolute;
    bottom:0;
    width:${productWidth}vw;
    background-color:${violeta};
    padding:0.5vh 0 0.5vh 0;
  }

`;
