import React from 'react'
import { GET_PRODUCTS } from '../../graphql/queries'
import { StyledCart } from './StyledCart'
import {useQuery} from "@apollo/client"
import { ProductAttributes } from '../../types'
import { fotosZapa } from '../../components/ProductDetail/mockup'


const Cart = () => {
const {data, loading, error} = useQuery(GET_PRODUCTS)
if (loading) return <span>Loading</span>;
if (error) return <span>Error {error.message}</span>;
const products: ProductAttributes[] = data.products


const {
    photo,
  } = fotosZapa;
let count = 0;
    return (
       <StyledCart className="fondoDegradado">
           <div className="container ">
           {
               
               products?.map((p:ProductAttributes)=>{
                count += p.price  
                return (
                    <div>
                        <img
                            src={photo}
                            alt={`photoDetail 3 - ${p.name}`}
                        />            
                        <h4>{p.name}</h4> 
                        <p>Price: {p.price}</p>
                        <button className="buttonDelete">X</button>                  
                    </div>
                )
               })
            }
            </div>
            <footer>
                <h5>Total: {count}</h5>
                <button className="boton">Buy</button>
            </footer>
       </StyledCart>
    )
}

export default Cart
