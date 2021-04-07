import React from "react";
import { StyledSlider } from "./StyledSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  //const slidesArray = ["https://imgur.com/3UahomA.png"];

  return (
    <StyledSlider>
      <Carousel>
        <div className="div">
          <img
            className="image"
            src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
          />
        </div>
        <div className="div">
          <img
            className="image"
            src="https://s3.amazonaws.com/nikeinc/assets/62720/Nike-Mag-2016-Official-01_rectangle_1600.jpg"
          />
        </div>
        <div className="div">
          <img
            className="image"
            src="https://media.metrolatam.com/2020/01/21/capturadepantall-7a975b35cad744b9406350e7b74e6bd7-1200x800.jpg"
          />
        </div>
        <div className="div">
          <img
            className="image"
            src="https://www.lomasnuevo.net/wp-contentupl/2016/11/NikeHyperAdapt.jpe"
          />
        </div>
      </Carousel>
      {/* <img
        src="https://images.unsplash.com/photo-1520256862855-398228c41684?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw"
        alt="slider"
      /> */}
    </StyledSlider>
  );
}
