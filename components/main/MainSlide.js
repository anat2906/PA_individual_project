import React, { Component } from "react";
import VideoCard from "../videoCard/VideoCard";

class MainSlide extends Component {
  render() {
    return (
      <div>
        <VideoCard className="mx-auto" />
      </div>
    );
  }
}

export default MainSlide;
