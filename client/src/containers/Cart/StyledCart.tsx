import styled from "styled-components"

export const StyledCart = styled.div`
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 9rem;
    div{     
        margin: 3rem 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
            .buttonDelete{
                position: absolute;
                top: 0.2rem;
                right: 0.5rem;
                width:1.5rem;
                background-color:#f11717;
                border:0;
                border-radius:5px;
                color:white;
                cursor: pointer;
                &:focus{
                     outline: none;
                }
                &:hover{
                    background-color: #c02020;

                }
            }
            img{
                width: 15rem;
            }
        }

}

footer{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    flex-direction: column;
    background-color: #c2c0c0;
    align-items: center;
    font-weight: 500;
    padding: 2rem;
    height: 9rem;
    justify-content: space-between;
    button{
        width: 20rem;
        height: 2.5rem;
        padding: 0;
        &:focus{
            outline: none;
        }
    }
}

    
`;