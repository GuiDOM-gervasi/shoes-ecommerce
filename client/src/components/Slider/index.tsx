import React from "react";
import { StyledSlider } from "./StyledSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  //const slidesArray = ["https://imgur.com/3UahomA.png"];

  return (
    <StyledSlider>
      <Carousel>
        {/* <div className="div">
          <img src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw" />
        </div> */}
        <div className="div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sF2uYxUPdd2wmnVvri8j4xeJpBQd4iwofA&usqp=CAU" />
        </div>
        <div className="div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWMGmKlXqMRwcv1KbdyNUFIiNZYjdZ8P8-g&usqp=CAU" />
        </div>
      </Carousel>
      {/* <img
        src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
        alt="slider"
      /> */}
    </StyledSlider>
  );
}
