import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import { StyledSidebar } from "../components/sidebar/Sidebar";
import Player from "../components/player/Player";

const AuthorSection = styled.div`
  
`

class VideoPage extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Container className="d-flex">
            <Col xs={9} sm={9} md={9} lg={9}>
              <Section>
                <Player />
                
              </Section>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <Section>
                <StyledSidebar>Sidebar</StyledSidebar>
              </Section>
            </Col>
          </Container>
        </main>
      </>
    );
  }
}

export default VideoPage;
