import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import fume1 from "../../Assets/fume vape/fume1.jpg";
import fume2 from "../../Assets/fume vape/fume2.jpg";
import fume3 from "../../Assets/fume vape/fume3.jpg";
import "./Caroulsel.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="caro12">
      <Carousel.Item>
        <img className="d-block w-100 vapeimg" src={fume1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="h3color">First slide label</h3>
          <p className="h3color">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 vapeimg" src={fume2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="h3color">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 vapeimg" src={fume3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
