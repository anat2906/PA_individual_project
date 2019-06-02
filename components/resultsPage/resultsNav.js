import React, { Component } from "react";
import styled from "styled-components";
import PT from "prop-types";
import { Row, Col } from "styled-bootstrap-grid";
import Button from "../button/Button";

const SNav = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: center;
  button {
    &:focus{
      outline: none
    }
  }
`;

export default class ResultsNav extends Component {
  render() {
    return (
      <SNav {...this.props}>
        <Col xs={4} sm={4} md={4} lg={4}>
          <Row>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Button
                value="videos"
                onClick={() => this.props.setActiveTab("videos")}
              >
                Videos
              </Button>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Button
                value="events"
                onClick={() => this.props.setActiveTab("events")}
              >
                Events
              </Button>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
              <Button
                value="users"
                onClick={() => this.props.setActiveTab("users")}
              >
                Users
              </Button>
            </Col>
          </Row>
        </Col>
      </SNav>
    );
  }
}

ResultsNav.propTypes = {
  setActiveTab: PT.func
};
