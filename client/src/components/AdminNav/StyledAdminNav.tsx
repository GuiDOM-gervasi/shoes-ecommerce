import styled from "styled-components"
import { blanco, verdeDetalle, verdeMain, violeta } from "../../containers/App/GlobalStyles";

export const StyledAdminNav = styled.div`
width: 100vw;

    .adminNavMovile,
    .adminNav {
    width:100vw;
    display: grid;
    line-height: 80px;
    background-color: ${violeta};
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-areas: "products categories orders users stock offers.";
    
    li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
    white-space: nowrap;
    text-align: center;
  }

  .navlink{
    margin-top: 6rem;
    color:${blanco};
    i{
      margin: 0 0.5rem;
    }
  }
  .selected{
    border-bottom: solid ${verdeMain};
  }

  .products {
    grid-area: products;
  }

  .categories {
    grid-area: categories;
  }

  .orders{
      grid-area: orders;
  }
  
  .users{
      grid-area: users;
  }

  .stock{
      grid-area:stock;
  }

  .offers{
      grid-area: offers;
  }

}


.adminNavMovile{
        display: none;
    }

@media (max-width: 858px) {
.navlink *:not(:first-child){
  display:none;
}
 .adminNav .selected{
    border-bottom: none;
    i{
    color: ${verdeDetalle};
    }
    font-size: 2em;
    }

}

`
;