import React from "react";
import { StyledSuccess } from "./StyledSuccess";
import Check from "../../icons/check.png";
export default function Success() {
  return (
    <StyledSuccess>
      <div>
        <h2>Congratulations!</h2>
        <p>
          Your payment was successful.
          <br />
          Please check your email to see your invoice.
        </p>
      </div>
      <img src={Check} alt="succes" />
    </StyledSuccess>
  );
}
