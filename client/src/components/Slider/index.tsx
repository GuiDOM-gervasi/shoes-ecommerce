import React from "react";
import { StyledSlider } from "./StyledSlider";
export default function Slider() {
  //const slidesArray = ["https://imgur.com/3UahomA.png"];
  return (
    <StyledSlider>
      {/* {slidesArray.map((photo, i) => ( */}
        <img src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw" alt="slider"/>
      {/* ))} */}
    </StyledSlider>
  );
}
