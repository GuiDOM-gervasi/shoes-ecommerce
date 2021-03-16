import React from "react";
import { StyledSlider } from "./StyledSlider";

export default function Slider() {
  const slidesArray = ["https://imgur.com/3UahomA.png"];
  return (
    <StyledSlider>
      {slidesArray.map((photo, i) => (
        <img src={photo} alt="Product slider" className={"slide" + i} key={i} />
      ))}
    </StyledSlider>
  );
}
