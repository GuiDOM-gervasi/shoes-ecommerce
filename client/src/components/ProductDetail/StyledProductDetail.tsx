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

    select:after{
     content:url(https://lh3.googleusercontent.com/proxy/UwFc5WNK5iY8hO9Zqq6IZ1bPgUXIhssgkw-uv1be9DUOHg2Nhkiz7dydYT3gRlmZyao0WDfctsmW4Bou280XQFCyh5NNZUpIhGevpljLZ3py2yqSEz9e0WBfXVcosIOz);
     display:table-cell;
     text-align:center;
     padding-top:7px;
     width:30px;
     height:30px;
     background-color:#d9d9d9;
     position:absolute;
     top:0;
     right:0px;
     pointer-events: none;
    }
`;
