import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { Row, Col } from "styled-bootstrap-grid";
import { TextInputForm } from "../form";
import { VideoCard, EventCard } from "./SearchDropdownCard";

const SInput = styled(TextInputForm)`
  background: ${colors.light_1};
  width: 100%;
  position: relative;
`;

const SResults = styled.div`
  position: absolute;
  display: ${props => (props.isOpenResults ? "block" : "none")};
  margin-top: 0.5em;
  padding: 0.5em;
  background: ${colors.light_1};
  left: 0;
  z-index: 5;
  width: 100%;
  border-radius: 3px;
`;

const ResultsSection = styled.div`
  width: 100%;
  padding: 0.3em 0.2em;
  border-bottom: 1px solid ${colors.shadow};
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

class HeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenResults: false
    };
    this.onShowResults = this.onShowResults.bind(this);
    this.onHideResults = this.onHideResults.bind(this);
  }

  onShowResults() {
    this.setState({
      isOpenResults: true
    });
  }

  onHideResults() {
    this.setState({
      isOpenResults: false
    });
  }

  render() {
    return (
      <>
        <SInput
          type="text"
          placeholder="search"
          onKeyDown={this.onShowResults}
          onBlur={this.onHideResults}
        />
        <SResults isOpenResults={this.state.isOpenResults}>
          <ResultsSection>
            <h4>Videos</h4>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
            </Row>
            <a>View all</a>
          </ResultsSection>
          <ResultsSection>
            <h4>Events</h4>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <EventCard />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <EventCard />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <EventCard />
              </Col>
            </Row>
            <a>View all</a>
          </ResultsSection>
          <ResultsSection>
            <h4>Users</h4>
            <Row>
              <Col xs={4} sm={4} md={4} lg={4}>
                <EventCard />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <EventCard />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4}>
                <EventCard />
              </Col>
            </Row>
            <a>View all</a>
          </ResultsSection>
        </SResults>
      </>
    );
  }
}

export default HeaderSearch;
