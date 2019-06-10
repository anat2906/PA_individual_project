import React, { Component } from "react";
import { colors, font_size } from "../config/var";
import { Col, Container } from "styled-bootstrap-grid";
import Head from "next/head";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import { Title, SmTitle } from "../components/title/Title";
import Collection from "../components/collectionPage/Collection";
import { ColorBlock, ColorBlockContent } from "../components/block/Block";
import Emoji from "../components/emoji/Emoji";
import SSlider from "../components/slider/Slider";
import CollectionSlide from "../components/collectionPage/CollectionSlide";

export default class CollectionPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Collection</title>
        </Head>
        <Header />
        <main>
          <Container>
            <Section>
              <Title>Collections <Emoji size={font_size.title_sm}>💎💎💎</Emoji></Title>
              <Collection />
            </Section>
            <Section>
              <ColorBlock color={colors.accent_4}>
                <ColorBlockContent>
                  <SmTitle>Other Collections <Emoji size={font_size.text}>🎨</Emoji></SmTitle>
                  <SSlider slidesToShow={4} className="mt-1">
                    <CollectionSlide title={true} />
                    <CollectionSlide title={true} />
                    <CollectionSlide title={true} />
                    <CollectionSlide title={true} />
                    <CollectionSlide title={true} />
                  </SSlider>
                </ColorBlockContent>
              </ColorBlock>
            </Section>
          </Container>
        </main>
      </>
    );
  }
}
