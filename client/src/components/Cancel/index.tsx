import React from 'react'
import { StyledCancel } from './StyledCancel'
import X from "../../icons/cancel.png"
export default function Cancel() {
  return (
    <StyledCancel>
      Parece que algo a salido mal. Por favor intentalo de nuevo. 
      si tiene alguna duda por favor contactarse con:
      <a href="mailto:orders@example.com">orders@example.com</a>.
      <img src={X} alt="F"/>
    </StyledCancel>
  )
}
