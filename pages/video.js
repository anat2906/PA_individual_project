import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";
import Header from "../components/header/Header";
import { StyledSidebar } from "../components/sidebar/Sidebar";

class VideoPage extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Container className="d-flex">
            <Col xs={9} sm={9} md={9} lg={9} />
            <Col xs={3} sm={3} md={3} lg={3}>
              <StyledSidebar className="mt-5">Sidebar</StyledSidebar>
            </Col>
          </Container>
        </main>
      </>
    );
  }
}

export default VideoPage;
