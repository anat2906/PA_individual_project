import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../../config/var";

const SVideoCard = styled.div`
  text-align: center;
  padding: 0.5em 0.2em;
  img {
    width: 90%;
    height: auto;
    margin-bottom: 0.3em;
  }
  h6 {
    font-size: ${font_size.text};
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: ${colors.dark_2};
  }
`;

const SCardAvatar = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100% !important;
    height: 100% !important;
    border-radius: 50%;
  }
`;

const SEventCard = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0.2em;
  h6 {
    font-size: ${font_size.text};
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: ${colors.dark_2};
    margin: 0;
    margin-left: 0.5em;
  }
`;

class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = { is_loading: true };
  }
  render() {
    return (
      <SVideoCard>
        <img src="https://img.youtube.com/vi/M3BM9TB-8yA/hqdefault.jpg" />
        <h6>Some video title</h6>
      </SVideoCard>
    );
  }
}

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = { is_loading: true };
  }
  render() {
    return (
      <SEventCard>
        <SCardAvatar>
          <img src="static/avatar.png" />
        </SCardAvatar>
        <h6>Event Name</h6>
      </SEventCard>
    );
  }
}

export { VideoCard, EventCard };
