import React, { Component } from "react";
import { Container, Col } from "styled-bootstrap-grid";
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
import Hashtag from "../components/hashtag/Hashtag";
import CollectionCard from "../components/collectionCard/CollectionCard";
import Emoji from "../components/emoji/Emoji";
import { Link } from "../routes";

export default class ProfilePage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Profile</title>
        </Head>
        <Header />
        <main>
          <Container>
            <Section>
              <ProfileHeader />
            </Section>
            <Section className="d-flex">
              <Col xs={9} sm={9} md={9} lg={9}>
                <ColorBlock color={colors.accent_4}>
                  <ColorBlockTitle color={colors.accent_4}>
                    <h5>
                      Videos <Emoji size={font_size.text}>🎞</Emoji>
                    </h5>
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
              </Col>
              <Col xs={3} sm={3} md={3} lg={3}>
                <ColorBlock color={colors.accent_3} className="mb-3">
                  <ColorBlockTitle color={colors.accent_3}>
                    <h5>
                      Followed Topics
                      <Emoji size={font_size.text}> 🐾</Emoji>
                    </h5>
                  </ColorBlockTitle>
                  <ColorBlockContent>
                    <Hashtag>go</Hashtag>
                    <Hashtag>python</Hashtag>
                    <Hashtag>react</Hashtag>
                    <Hashtag>AI</Hashtag>
                    <Hashtag>Highload2019</Hashtag>
                  </ColorBlockContent>
                </ColorBlock>
                <ColorBlock color={colors.accent_2}>
                  <ColorBlockTitle color={colors.accent_2}>
                    <h5>
                      Collections <Emoji size={font_size.text}> 🌟</Emoji>
                    </h5>
                  </ColorBlockTitle>
                  <ColorBlockContent>
                    <Link route="collection">
                      <a>
                        <CollectionCard />
                      </a>
                    </Link>
                    <Link route="collection">
                      <a>
                        <CollectionCard />
                      </a>
                    </Link>
                    <Link route="collection">
                      <a>
                        <CollectionCard />
                      </a>
                    </Link>
                  </ColorBlockContent>
                </ColorBlock>
              </Col>
            </Section>
          </Container>
        </main>
      </>
    );
  }
}
