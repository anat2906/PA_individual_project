import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
import { colors } from "../../config/var";

const Video = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 150px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5em;
`;

const FTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
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
const FInfo = styled.div`
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
    font-size: 14px;
  }
`;
class VideoCard extends Component {
  render() {
    return (
      <div className="d-flex flex-column px-1">
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
        <Footer>
          <div className="d-flex">
            <Col xs={8} sm={8} md={8} lg={8}>
              <Tooltip
                content="Author"
                background="#fff"
                padding={3}
                color={colors.dark_1}
                placement="top"
                fontSize="13px"
                fontFamily="Roboto"
              >
              {/* TODO: Doesn't work properly with long names */}
                <FInfo>
                  <img src="static/icons/svg/aperture.svg" />
                  <span>JS Conf</span> 
                </FInfo>
              </Tooltip>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Tooltip
                content="Likes"
                background="#fff"
                padding={3}
                color={colors.dark_1}
                placement="top"
                fontSize="13px"
                fontFamily="Roboto"
              >
                <FInfo>
                  <img src="static/icons/svg/favourite.svg" />
                  <span>200</span>
                </FInfo>
              </Tooltip>
            </Col>
          </div>
          <div className="d-flex">
            <Col xs={8} sm={8} md={8} lg={8}>
              <Tooltip
                content="Views"
                background="#fff"
                padding={3}
                color={colors.dark_1}
                placement="top"
                fontSize="13px"
                fontFamily="Roboto"
              >
                <FInfo>
                  <img src="static/icons/svg/tv.svg" />
                  <span>2750</span>
                </FInfo>
              </Tooltip>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Tooltip
                content="Comments"
                background="#fff"
                padding={3}
                color={colors.dark_1}
                placement="top"
                fontSize="13px"
                fontFamily="Roboto"
              >
                <FInfo>
                  <img src="static/icons/svg/chat-alt.svg" />
                  <span>35</span>
                </FInfo>
              </Tooltip>
            </Col>
          </div>
        </Footer>
      </div>
    );
  }
}

export default VideoCard;
