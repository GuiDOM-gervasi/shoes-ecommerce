import React from 'react'
import { useHistory } from 'react-router'
import { StyledOrder } from './StyledOrder'

const Order = ({match:{params:{id}}}) => {
    const history = useHistory()
    const harcore = [{orderID:1, productID:1, quantity:4, price:99.9},
        {orderID:2, productID:2, quantity:5, price:99.9},
        {orderID:3, productID:3, quantity:4, price:99.9},
        {orderID:4, productID:4, quantity:6, price:99.9}]
    return (
       <StyledOrder>
           <ul>
           <li>
            <h4>Order</h4>
           <h4>Product</h4>
           <h4>Quantity</h4>
           <h4>Price</h4>
           <span></span>
           </li>    
           {harcore?.map((h) => (
          <li >
            <span className="id"> {h.orderID} </span>
            <span className="id"> {h.productID} </span>
            <span className="name"> {h.quantity} </span>
            <span className="price"> {h.price} </span>            
              <button onClick={()=>history.push("/product/"+ h.productID)}> Details </button>
          </li>
        ))}
           </ul>
       </StyledOrder>
    )
}

export default Order
