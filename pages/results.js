import React, { Component } from "react";
import { Container, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Head from "next/head";
import { colors, font_size } from "../config/var";
import Header from "../components/header/Header";
import ResultsNav from "../components/resultsPage/resultsNav";
import VideoCard from "../components/videoCard/VideoCard";

const CardWrapper = styled(Col)`
    padding: 0.5em 1em;
`

export default class ResultsPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Video</title>
        </Head>
        <Header />
        <main>
          <Container>
            <ResultsNav />
            <div className="d-flex flex-wrap">
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
            </div>
          </Container>
        </main>
      </>
    );
  }
}
