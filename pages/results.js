import React, { Component } from "react";
import { Container, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Head from "next/head";
import { colors, font_size } from "../config/var";
import Header from "../components/header/Header";
import ResultsNav from "../components/resultsPage/resultsNav";
import VideoCard from "../components/videoCard/VideoCard";
import EventCard from "../components/eventCard/EventCard";
import Section from "../components/section/Section";
import MainAds from "../components/main/MainAds";

const CardWrapper = styled(Col)`
  padding: 0.5em 1em;
`;

export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active_tab: "events"
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(tab) {
    this.setState({ active_tab: tab });
  }

  render() {
    return (
      <>
        <Head>
          <title>Video</title>
        </Head>
        <Header />
        <main>
          <Container className="d-flex">
            <Section>
              <ResultsNav setActiveTab={this.setActiveTab} />
              <div className="d-flex flex-wrap">
                {this.state.active_tab === "videos" ? (
                  <>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <VideoCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <VideoCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <VideoCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <VideoCard />
                    </CardWrapper>
                  </>
                ) : this.state.active_tab === "events" ? (
                  <>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                  </>
                ) : this.state.active_tab === "users" ? (
                  <>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                    <CardWrapper xs={3} sm={3} md={3} lg={3}>
                      <EventCard />
                    </CardWrapper>
                  </>
                ) : null}
              </div>
            </Section>
          </Container>
        </main>
      </>
    );
  }
}
