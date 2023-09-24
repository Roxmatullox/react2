import React, { Component } from "react";
import Slider from "react-slick";

import sert2 from "../../assets/images/sertificate2.svg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={sert2} alt="" />
          </div>
          <div>
            <img src={sert2} alt="" />
          </div>
          <div>
            <img src={sert2} alt="" />
          </div>
          <div>
            <img src={sert2} alt="" />
          </div>
          <div>
            <img src={sert2} alt="" />
          </div>
          <div>
            <img src={sert2} alt="" />
          </div>
          <div>
            <img src={sert2} alt="" />
          </div>
          <div>
            <img src={sert2} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}