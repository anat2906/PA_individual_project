import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { Row, Col } from "styled-bootstrap-grid";

export default class AccountSubscriptions extends Component {
  render() {
    return (
      <Row className="justify-content-space-between">
        <Col xs={3} sm={3} md={3} lg={3}>
          Subscr
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          Subscr
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          Subscr
        </Col>
        <Col xs={3} sm={3} md={3} lg={3}>
          Subscr
        </Col>
      </Row>
    );
  }
}
