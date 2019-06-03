import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { Col } from "styled-bootstrap-grid";
import EventCard from "../eventCard/EventCard";

const STitle = styled.h2`
  padding-left: 2em;
  margin-bottom: 1em;
  font-size: ${font_size.title_sm};
  font-weight: 700;
  color: ${colors.dark_1};
`;

export default class AccountSubscriptions extends Component {
  render() {
    return (
      <>
        <STitle>Subscriptions</STitle>
        <div className="d-flex flex-wrap">
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
          <Col className="mb-3" xs={3} sm={3} md={3} lg={3}>
            <EventCard />
          </Col>
        </div>
      </>
    );
  }
}
