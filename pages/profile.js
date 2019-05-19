import React, { Component } from "react";
import { Container, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import Head from "next/head";
import { colors, font_size } from "../config/var";
import Header from "../components/header/Header";
import VideoCard from "../components/videoCard/VideoCard";
import Section from "../components/section/Section";
import ProfileHeader from "../components/profilePage/ProfileHeader";
import {
  ColorBlock,
  ColorBlockTitle,
  ColorBlockContent
} from "../components/block/Block";

export default class ProfilePage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Video</title>
        </Head>
        <Header />
        <main>
          <Container>
            <Section>
              <ProfileHeader />
            </Section>
            <Section>
              <ColorBlock color={colors.accent_4}>
                <ColorBlockTitle color={colors.accent_4}>
                  <h5>Videos</h5>
                  <button>view all</button>
                </ColorBlockTitle>
                <ColorBlockContent className="d-flex">
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <VideoCard />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <VideoCard />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <VideoCard />
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <VideoCard />
                  </Col>
                </ColorBlockContent>
              </ColorBlock>
            </Section>
            <Section>
              <ColorBlock color={colors.accent_3}>
                <ColorBlockTitle color={colors.accent_3}>
                  <h5>Collections</h5>
                  <button>view all</button>
                </ColorBlockTitle>
                <ColorBlockContent>videocards videocards</ColorBlockContent>
              </ColorBlock>
            </Section>
          </Container>
        </main>
      </>
    );
  }
}
