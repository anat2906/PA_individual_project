import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import { ColorBlock, ColorBlockTitle, ColorBlockContent } from "../block/Block";

const Banner = styled.div`
  background-image: url("static/banner.jpg");
  background-size: contain;
  width: 100%;
  min-height: 100px;
  height: auto;
  margin-bottom: 0.5em;
`;

export default class MainAds extends Component {
  render() {
    return (
      <ColorBlock color={colors.accent_2} {...this.props}>
        <ColorBlockTitle color={colors.accent_2}>
          <h5>Our Sponsors</h5>
        </ColorBlockTitle>
        <ColorBlockContent className="px-1">
          <Banner />
          <Banner />
          <Banner />
          <Banner />
        </ColorBlockContent>
      </ColorBlock>
    );
  }
}
