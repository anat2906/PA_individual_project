import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import VideoCard from "../videoCard/VideoCard";
import { ColorBlock, ColorBlockTitle, ColorBlockContent } from "../block/Block";
import { colors, font_size } from "../../config/var";
import Emoji from "../emoji/Emoji";
import { fontFace } from "polished";

const SVideo = styled.div`
  padding: 0.5em 0;
`;

export default class EventVideos extends Component {
  render() {
    return (
      <ColorBlock color={colors.accent_3}>
        <ColorBlockTitle color={colors.accent_3}>
          <h5>Event Videos <Emoji size={font_size.text}>🎞</Emoji></h5>
        </ColorBlockTitle>
        <ColorBlockContent>
          <div className="d-flex flex-wrap">
            <Col xs={3} sm={3} md={3} lg={3}>
              <SVideo>
                <VideoCard />
              </SVideo>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <SVideo>
                <VideoCard />
              </SVideo>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <SVideo>
                <VideoCard />
              </SVideo>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <SVideo>
                <VideoCard />
              </SVideo>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <SVideo>
                <VideoCard />
              </SVideo>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <SVideo>
                <VideoCard />
              </SVideo>
            </Col>
          </div>
        </ColorBlockContent>
      </ColorBlock>
    );
  }
}
