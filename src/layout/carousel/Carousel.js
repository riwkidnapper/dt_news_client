import React from "react";
import slideImages1 from "../../assets/slide1.png";
import slideImages2 from "../../assets/slide2.png";
import "../carousel/carousel.css";
import Carousel from "react-bootstrap/Carousel";

function carousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slideImages1} alt="First slide" />
          <Carousel.Caption>
            <div className="name">
              หจก.ดี.ที.การบัญชี ภาษี และตรวจสอบ
              <p>D T ACCOUNTING TAX AND AUDIT LIMITED PARTNERSHIP</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideImages2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div className="name">
              หจก.ดี.ที.การบัญชี ภาษี และตรวจสอบ
              <p>D T ACCOUNTING TAX AND AUDIT LIMITED PARTNERSHIP</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default carousel;
