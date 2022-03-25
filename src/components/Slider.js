import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider/image 136.png"
          alt="Fortaleza Ituxi"
        />
        <Carousel.Caption>
          <h3>Fortaleza Ituxi</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider/rimba-raya.jpg"
          alt="Rimba Raya"
        />

        <Carousel.Caption>
          <h3>Rimba Raya</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider/image 136.png"
          alt="Hebei Yuxian"
        />

        <Carousel.Caption>
          <h3>Hebei Yuxian</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
