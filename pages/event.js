import React, { Component } from "react";
import Head from "next/head";
import { Container, Col } from "styled-bootstrap-grid";
import { colors, font_size } from "../config/var";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import EventHeader from "../components/eventpage/EventHeader";
import EventVideos from "../components/eventpage/EventVideos"

export default class EventPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Event</title>
        </Head>
        <Header />
        <main>
          <Container>
            <Section>
              <EventHeader />
              <EventVideos />
            </Section>
          </Container>
        </main>
      </>
    );
  }
}
