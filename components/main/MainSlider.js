import React, { Component } from "react";
import SSlider from "../slider/Slider";
import MainSlide from "./MainSlide";

class MainSlider extends Component {
  render() {
    return (
      <SSlider slidesToShow={3} {...this.props}>
        <MainSlide />
        <MainSlide />
        <MainSlide />
        <MainSlide />
        <MainSlide />
        <MainSlide />
      </SSlider>
    );
  }
}
export default MainSlider;
