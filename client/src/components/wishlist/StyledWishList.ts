import styled from "styled-components";
import { blanco, negro, verdeDetalle, verdeDetalleTrans, verdeMain, violeta, violetaHover } from "../../containers/App/GlobalStyles";

export const StyledWishListTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1{
    margin: auto;
    color:#594D9E;
  }
  ul li {
    width: 50%;
    height: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem auto ;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color:#A951FC;
    font-weight: 400;
    border-radius: 5px;
    span {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      color: ${blanco};
      .white{
      color: ${blanco};
      }
      img{
        width:50%;
        border: solid ${violeta};
        border-radius: 10px; 
      }
      i{
        width: 100%;
        color: ${verdeMain}
      }
    }

  }
`;
