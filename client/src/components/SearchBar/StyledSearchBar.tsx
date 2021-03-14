import styled from 'styled-components'

export const StyledSearchBar = styled.div`
  width: 100%;
  max-width: 20rem;
  padding: 0.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  .formSearch {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    input{
    border: 1px solid transparent;
    background-color: #f1f1f1;
    padding: 0.5rem 0;
    }

    input[type=text] {
      background-color: #f1f1f1;
      width: 80%;
    }

    input[type=submit] {
      background-color: #f1f1f1;
      width:20%;
      color: #6930C3;
    }

  }

  .contentResult{
    width:100%;
    max-width: 20rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: min-content;
    top: 2.5rem;
  }

  .contentResultItem{
    position: relative;
    border: 1px solid #c4c4c4;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;

    div {
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    background-color: #fff;
    display: flex;
    
      &:hover{
        color: #6930C3;
      }
      .name{
        width: 100%;
        color: #000;
      }

      .goPage{
        background-color: #6930C3;
        border: 0.1rem solid #6930C3;
        color:#fff;
        width: 100%;
        &:hover{
          background-color: #fff;
          border: 0.1rem solid #6930C3;
          color: #6930C3;
        }
      }

    }

  }
`;
