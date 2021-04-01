import React from 'react'
import { StyledSuccess } from './StyledSuccess'
import Check from "../../icons/check.png"
export default function Success() {
  return (
    <StyledSuccess>
        <h2>Felicitaciones!</h2>
        <p>Su compra ha sido realizada con éxito</p>
        <img src={Check} alt="succes"/>
    </StyledSuccess>  
  )
}
