import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import { colors } from "../../config/var";

const Global = createGlobalStyle`
.slick-slider {
  margin-top: 1.5em;
  margin-bottom: 0 !important;
}

.slick-next:before {
  font-size: 25px;
  color: ${colors.dark_1};
  content: "➞";
  position: absolute;
  line-height: 0;
  display: block;
}
.slick-prev:before {
  position: absolute;
  line-height: 0;
  font-size: 25px;
  color: ${colors.dark_1};
  content: "➞";
  display: block;
}
.slick-prev {
  top: -15%;
  left: 100%;
  transform: translateX(-100%) scaleX(-1);
  opacity: 1;
}

.slick-next {
  transform: none;
  top: -24%;
  right: 0;
  opacity: 1;
}
`;

export default class SSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: 1,
      swipeToSlide: true
    };
    return (
      <>
        <Global />
        <Slider {...settings} {...this.props}>
          {this.props.children}
        </Slider>
      </>
    );
  }
}
