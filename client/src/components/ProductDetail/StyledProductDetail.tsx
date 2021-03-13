import styled from "styled-components";

export const StyledProductDetail = styled.div`
    ul{
        list-style-type:none;
        display:flex;
        justify-content: space-around;
        width:50vw;
        padding-inline-start:0;
        margin: 0;
    }
    .container{
        border: 1px black solid;
        display: grid;
        grid-template-columns: 1fr 1fr
    }
    .price{
    }
    .priceBefore{
        text-decoration:line-through;
    }
    .photo{
        width: 50vw;
        height: 70vh;
        object-position: 20% 90%;
        object-fit: cover;
    }
    .photoDetail{
        width: 10vw;
        height: 10vw;
        object-position: 20% 90%;
        object-fit: cover;
    }
    .boton{
        background-color: #6930C3;
        border: none;
        box-sizing: border-box;
        border-radius: 5px;
        color: #F0F0F0;
        width: 60%;
        padding: 2%;
    }
    .boton:hover{
        background-color: #6930C350;
        transition: all 0.3s;
    }
`;
