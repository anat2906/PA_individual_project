import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import { colors } from "../../config/var";
import { PlayIcon, VolumeLoudIcon, SettingsIcon } from "../icons";

const Img = styled.img`
  width: 100%;
  height: auto;
`;
const Control = styled.div`
  padding: 0.5em 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: none;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Progress = styled.div`
  height: 8px;
  width: 100%;
  background: ${colors.dark_3};
`;

class Player extends Component {
  render() {
    return (
      <div {...this.props}>
        <Img src="https://img.youtube.com/vi/M3BM9TB-8yA/hqdefault.jpg" />
        <Control>
          <Col xs={1} sm={1} md={1} lg={1} className="text-left mx-0 px-0">
            <PlayIcon />
          </Col>
          <Col xs={9} sm={9} md={9} lg={9}>
            <Progress />
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} className="text-left mx-0 px-0">
            <span>00:00</span>
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} className="text-right mx-0 px-0">
            <VolumeLoudIcon className="mr-3"/>
            <SettingsIcon />
          </Col>
        </Control>
      </div>
    );
  }
}

export default Player;
