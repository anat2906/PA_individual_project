import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import { colors, font_size } from "../../config/var";
import VideoCard from "../videoCard/VideoCard";
import CollectionCard from "../collectionCard/CollectionCard";
import { ColorBlock, ColorBlockTitle, ColorBlockContent } from "../block/Block";
import { Link } from "../../routes";

const SWrapper = styled.div`
  width: 100%;
`;

const SDescription = styled.div`
  margin-top: 2em;
  p {
    font-family: "PT Mono";
    font-size: ${font_size.text};
  }
`;

const SCollectionLeft = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  padding-right: 1.5em;
  border-right: 1px solid ${colors.shadow};
`;

export default class Collection extends Component {
  render() {
    return (
      <SWrapper>
        <ColorBlock color={colors.accent_2}>
          <ColorBlockTitle color={colors.accent_2}>
            <h5>Favourites</h5>
          </ColorBlockTitle>
          <ColorBlockContent className="d-flex">
            <Col xs={3} sm={3} md={3} lg={3}>
              <SCollectionLeft>
                <Link route="video" params={{ playlist: "hello!" }}>
                  <a>
                    <CollectionCard title={false} />
                  </a>
                </Link>
                <SDescription>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </SDescription>
              </SCollectionLeft>
            </Col>
            <Col xs={9} sm={9} md={9} lg={9} className="d-flex flex-wrap">
              <Col xs={9} sm={9} md={9} lg={9}>
                <p>8 videos</p>
              </Col>
              <Col className="px-2 pb-3" xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
              <Col className="px-2 pb-3" xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
              <Col className="px-2 pb-3" xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
              <Col className="px-2 pb-3" xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
              <Col className="px-2 pb-3" xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
              <Col className="px-2 pb-3" xs={4} sm={4} md={4} lg={4}>
                <VideoCard />
              </Col>
            </Col>
          </ColorBlockContent>
        </ColorBlock>
      </SWrapper>
    );
  }
}
