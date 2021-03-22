import React from 'react'
import { GET_CART } from '../../graphql/queries'
import { StyledCart } from './StyledCart'
import {useMutation, useQuery} from "@apollo/client"
import { CartAttributes } from '../../types'
import { fotosZapa } from '../../components/ProductDetail/mockup'
import { useAuth } from '../../hooks/AuthProvider'
import { DELETE_TO_CART } from '../../graphql/mutations'


const Cart = () => {
const {userId} = useAuth()
 const {data, loading, error} = useQuery(GET_CART, {
        variables: {
          userId: userId&&userId
        },})
const [deleteProductCart, { loading: loadingDelete }] = useMutation(
    DELETE_TO_CART,
        {
            refetchQueries: [{ query: GET_CART, variables:{
             userId: userId&&userId   
            }}],
        }
);

if (loading) return <span>Loading</span>;
if (error) return <span>Error {error.message}</span>;
const products= data.cart[0]?.finalproducts
console.log(products)

const {
    photo,
  } = fotosZapa;
let count = 0;

const handleDelete = (finalproduct) => {
    console.log(data.cart[0]?.id,finalproduct)
    deleteProductCart({
        variables:{
            cartId: data.cart[0]?.id,
            finalproductId: finalproduct
        } 
    })
}
    return (
       <StyledCart className="fondoDegradado">
           <div className="container ">
           {
               
               products?.map((p)=>{
                count += p.product.price  
                return (
                    <div>
                        <img
                            src={p.product.muestraimg}
                            alt={`photoDetail 3 - ${p.product.name}`}
                        />            
                        <h4>{p.product.name}</h4> 
                        <p>Price: {p.product.price}</p>
                        <button className="buttonDelete" onClick={()=>handleDelete(p.product.id)}>X</button>                  
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
