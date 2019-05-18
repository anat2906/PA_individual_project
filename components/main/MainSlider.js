import React from "react";
import { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import {colors} from "../../config/var";
import MainSlide from "./MainSlide";

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
  left: 96%;
  transform: scaleX(-1);
  opacity: 1;
}

.slick-next {
  transform: none;
  top: -24%;
  right: 1%;
  opacity: 1;
}
`;

class MainSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true
    };
    return (
      <>
        <Global />
        <Slider {...settings} {...this.props}>
          <MainSlide />
          <MainSlide />
          <MainSlide />
          <MainSlide />
          <MainSlide />
          <MainSlide />
        </Slider>
      </>
    );
  }
}
export default MainSlider;
