import React from "react";
import Slider from "react-slick";
import MainSlide from "./MainSlide";

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
      <Slider {...settings} {...this.props}>
        <MainSlide />
        <MainSlide />
        <MainSlide />
        <MainSlide />
        <MainSlide />
        <MainSlide />
      </Slider>
    );
  }
}
export default MainSlider;
