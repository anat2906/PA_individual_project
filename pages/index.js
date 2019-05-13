import React, { Fragment } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { colors, font_size } from "../config/var";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import MainSlider from "../components/main/MainSlider";
import Title from "../components/title/Title";
import Shadow from "../components/box-shadow/Shadow";
import Sidebar from "../components/sidebar/Sidebar";
import {
  Block,
  ColorBlock,
  ColorBlockTitle,
  ColorBlockContent
} from "../components/block/Block";
import Button from "../components/button/Button";
import Emoji from "../components/emoji/Emoji";
const Index = () => (
  <>
    <>
      <Header />
      <main>
        <Container className="d-flex">
          <Col xs={2} sm={2} md={2} lg={2}>
            <Section>
              <ColorBlock>
                <ColorBlockTitle>
                  <h5>Browse by</h5>
                </ColorBlockTitle>
                <ColorBlockContent>
                  <Button className="mb-2">Events</Button>
                  <Button className="mb-2">Speakers</Button>
                  <Button>Speakers</Button>
                </ColorBlockContent>
              </ColorBlock>
            </Section>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7}>
            <Section>
              <Container fluid="true">
                <Shadow color={colors.accent_3}>
                  <Title>
                    Newest <Emoji size={font_size.text}>🌈</Emoji>
                  </Title>
                  <MainSlider className="mb-1" />
                </Shadow>
              </Container>
            </Section>
            <Section>
              <Container fluid="true">
                <Shadow color={colors.accent_2}>
                  <Title>
                    Top Rated <Emoji size={font_size.text}>🚀🚀🚀</Emoji>
                  </Title>
                  <MainSlider className="mb-1" />
                </Shadow>
              </Container>
            </Section>
            <Section>
              <Container fluid="true">
                <Shadow color={colors.accent_4}>
                  <Title>
                    Popular on this week{" "}
                    <Emoji size={font_size.text}>🔥🔥🔥</Emoji>
                  </Title>
                  <MainSlider className="mb-1" />
                </Shadow>
              </Container>
            </Section>
            <Section>
              <Container fluid="true">
                <Shadow color={colors.accent_1}>
                  <Title>
                    Live Streams <Emoji size={font_size.text}>🎥✨</Emoji>
                  </Title>
                  <MainSlider className="mb-1" />
                </Shadow>
              </Container>
            </Section>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Section>
              <Sidebar />
            </Section>
          </Col>
        </Container>
      </main>
    </>
  </>
);

export default Index;
