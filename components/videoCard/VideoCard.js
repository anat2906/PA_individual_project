import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import STooltip from "../tooltip/Tooltip";
import { colors, font_size } from "../../config/var";

const Video = styled.div`
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: auto;
    padding: 0 !important;
    margin: 0 !important;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5em;
`;

const FTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text_sm};
  position: absolute;
  padding: 0.3em;
  top: 0;
  left: 0;
  span {
    line-height: 0px;
    font-weight: 700;
    background: white;
  }
`;
export const FInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 15px;
    height: 15px;
  }
  span {
    font-family: "PT Mono";
    margin-left: 0.5em;
    font-size: ${font_size.text_sm};
  }
`;
class VideoCard extends Component {
  render() {
    return (
      <div className="d-flex flex-column" {...this.props}>
        <Link href="/video">
          <Video>
            <img
              {...this.props}
              src="https://img.youtube.com/vi/M3BM9TB-8yA/hqdefault.jpg"
            />
            <FTitle>
              <span>
                10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018
              </span>
            </FTitle>
          </Video>
        </Link>
        <Footer>
          <div className="d-flex">
            <Col xs={8} sm={8} md={8} lg={8}>
              <a>
                <STooltip content="Author">
                  {/* TODO: Doesn't work properly with long names */}
                  <FInfo>
                    <img src="static/icons/svg/aperture.svg" />
                    <span>JS Conf</span>
                  </FInfo>
                </STooltip>
              </a>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <a>
                <STooltip content="Likes">
                  <FInfo>
                    <img src="static/icons/svg/favourite.svg" />
                    <span>200</span>
                  </FInfo>
                </STooltip>
              </a>
            </Col>
          </div>
          <div className="d-flex">
            <Col xs={8} sm={8} md={8} lg={8}>
              <a>
                <STooltip content="Views">
                  <FInfo>
                    <img src="static/icons/svg/tv.svg" />
                    <span>2750</span>
                  </FInfo>
                </STooltip>
              </a>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <a>
                <STooltip content="Comments">
                  <FInfo>
                    <img src="static/icons/svg/chat-alt.svg" />
                    <span>35</span>
                  </FInfo>
                </STooltip>
              </a>
            </Col>
          </div>
        </Footer>
      </div>
    );
  }
}

export default VideoCard;
