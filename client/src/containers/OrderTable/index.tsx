import React from 'react'
import { useHistory } from 'react-router'
import {StyledOrderTable} from "./StyledOrderTable"
const OrderTable = () => {
const table = [{userid:1, cartId:2, state:"fulfilled", price:99 },{userid:2, cartId:3, state:"pending", price:95 }]
const history = useHistory()
    return (
        <StyledOrderTable>
           <ul>
        {table?.map((h) => (
          <li >
            <span className="id"> {h.userid} </span>
            <span className="id"> {h.cartId} </span>
            <span className="name"> {h.state} </span>
            <span className="price"> {h.price} </span>            
              <button onClick={()=>history.push("/admin/orders/"+h.cartId)}> Details </button>
          </li>
        ))}
      </ul> 
      </StyledOrderTable>
    )
}

export default OrderTable
