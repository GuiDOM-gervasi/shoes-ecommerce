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
`;
