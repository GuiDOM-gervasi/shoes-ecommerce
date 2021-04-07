import React from "react";
import { StyledSlider } from "./StyledSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  //const slidesArray = ["https://imgur.com/3UahomA.png"];

  return (
    <StyledSlider>
      <Carousel>
        <div>
          <img src="https://user-images.githubusercontent.com/74660801/113930470-9d7c1780-97f1-11eb-9bbd-6abdfd0f1a3a.jpg" />
        </div>

        <div>
          <img src="https://user-images.githubusercontent.com/74660801/113929022-d4e9c480-97ef-11eb-87ce-1f58278d01c7.jpg" />
        </div>
        <div>
          <img src="https://user-images.githubusercontent.com/74660801/113929950-f39c8b00-97f0-11eb-9ede-19e0efc28018.jpg" />
        </div>
      </Carousel>
      {/* <img
        src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
        alt="slider"
      /> */}
    </StyledSlider>
  );
}
