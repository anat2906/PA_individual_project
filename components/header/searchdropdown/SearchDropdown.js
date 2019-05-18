import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../../config/var";
import { Col } from "styled-bootstrap-grid";
import { VideoCard, EventCard } from "./SearchDropdownCard";

const SDropdown = styled.div`
  display: none;
  position: absolute;
  z-index: 5;
  width: 100%;
  background: white;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;
const DropdownSection = styled.div`
  width: 100%;
  padding: 0.3em 0.2em;
  padding-top: 1em;
  h4 {
    font-size: ${font_size.text};
    color: ${colors.dark_2};
    margin: 0;
  }
  a {
    font-weight: bold;
    font-size: ${font_size.text_sm};
    color: ${colors.dark_2};
  }
`;

export default class SearchDropdown extends Component {
  render() {
    return (
      <SDropdown>
        <DropdownSection>
          <h4>Videos</h4>
          <div className="d-flex">
            <Col xs={4} sm={4} md={4} lg={4}>
              <VideoCard />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <VideoCard />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <VideoCard />
            </Col>
          </div>
          <a>View All</a>
        </DropdownSection>
        <DropdownSection>
          <h4>Events</h4>
          <div className="d-flex">
            <Col xs={4} sm={4} md={4} lg={4}>
              <EventCard />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <EventCard />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <EventCard />
            </Col>
          </div>
          <a>View All</a>
        </DropdownSection>
        <DropdownSection>
          <h4>Users</h4>
          <div className="d-flex">
            <Col xs={4} sm={4} md={4} lg={4}>
              <EventCard />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <EventCard />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <EventCard />
            </Col>
          </div>
          <a>View All</a>
        </DropdownSection>
      </SDropdown>
    );
  }
}
