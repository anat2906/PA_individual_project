import React, { Component } from "react";
import styled from "styled-components";

const Img = styled.div`
  img {
    width: 220px;
    height: 180px;
  }
`;

class Video extends Component {
  render() {
    return (
      <Img>
        <img
          {...this.props}
          src="https://img.youtube.com/vi/M3BM9TB-8yA/hqdefault.jpg"
        />
      </Img>
    );
  }
}

export default Video;
