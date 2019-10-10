import React, { Component } from "react";
import "../carousel/carousel.css";
import Carousel from "react-bootstrap/Carousel";

class Carousels extends Component {
  render() {
    const { image } = this.props;
    return (
      <div>
        <Carousel>
          {image.map((value, index) =>
            <Carousel.Item key={index.toString()}>
              <img className="d-block w-100" src={value} alt={"slide-" + index.toString()} />
              <Carousel.Caption>
                <div className="name">
                  หจก.ดี.ที.การบัญชี ภาษี และตรวจสอบ
                  <p>D T ACCOUNTING TAX AND AUDIT LIMITED PARTNERSHIP</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
