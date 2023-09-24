import React, { Component } from "react";
import Slider from "react-slick";
import "./home.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="carousel">
        <Slider {...settings}>
          <div className="carousel">
            <div>
              <h4>LEANGROUP - тубы и этикетки</h4>
              <h2>Ламинатные тубы</h2>
              <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
              <div><button>Каталог</button></div>
            </div>
          </div>
          <div className="carousel">
           <div>
              <h4>LEANGROUP - тубы и этикетки</h4>
              <h2>Ламинатные тубы</h2>
              <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
              <div><button>Каталог</button></div>
            </div>
          </div>
          <div className="carousel">
            <div>
              <h4>LEANGROUP - тубы и этикетки</h4>
              <h2>Ламинатные тубы</h2>
              <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
              <div><button>Каталог</button></div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
