import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Head from "next/head";
import { Container, Col } from "styled-bootstrap-grid";
import { colors, font_size } from "../config/var";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import { StyledSidebar, SectionTitle } from "../components/sidebar/Sidebar";
import Player from "../components/player/Player";
import Title from "../components/title/Title";
import Button from "../components/button/Button";
import Shadow from "../components/box-shadow/Shadow";
import STooltip from "../components/tooltip/Tooltip";
import { FInfo } from "../components/videoCard/VideoCard";
import VideoCard from "../components/videoCard/VideoCard";
import Hashtag from "../components/hashtag/Hashtag";
import { CommentInput, Comment } from "../components/comment";
import {
  UserIcon,
  PlayIcon,
  LikeIcon,
  CommentIcon,
  RecommendationsIcon,
  CollectionIcon
} from "../components/icons";
import Modal from "../components/modal/Modal";

const DateSection = styled.div`
  display: flex;
  align-items: end;
  align-items: flex-end;
  p {
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text};
    margin: 0;
    margin-right: 0.5em;
  }
  span {
    color: ${colors.dark_2};
    font-family: "PT Mono";
    font-size: ${font_size.text_sm};
    margin: 0;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.shadow};
  padding-bottom: 1em;
  padding-top: 1em;
  svg {
    width: 35px;
    height: 35px;
    margin-right: 0.5em;
  }
  h6 {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text};
  }
`;

const ViewsSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
`;

const VideoInfo = styled(FInfo)`
  svg {
    width: 20px;
    height: 20px;
  }
  span {
    16px;
  }
`;

const Description = styled.div`
  border-bottom: 1px solid ${colors.shadow};
  padding-bottom: 1em;
  p {
    display: block;
    font-size: ${font_size.text};
    margin-bottom: 0.5em;
  }
`;

const CommentSection = styled.div`
  padding-top: 1.5em;
`;

class VideoPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Video</title>
        </Head>
        <Header />
        <main>
          <Container className="d-flex">
            <Col xs={9} sm={9} md={9} lg={9}>
              <Section>
                <Player className="mb-3" />
                <div className="d-flex flex-wrap">
                  <div className="mr-3">
                    <Title>Video Title</Title>
                    <DateSection>
                      <p>Published at</p>
                      <span>25/09/2019</span>
                    </DateSection>
                  </div>
                  <Button>Add to collection</Button>
                </div>
                <AuthorSection>
                  <div className="d-flex align-items-center mr-3">
                    <UserIcon />
                    <h6>Username</h6>
                  </div>
                  <Button>Follow</Button>
                </AuthorSection>
                <ViewsSection>
                  <a>
                    <STooltip content="Views" className="mr-3">
                      <VideoInfo>
                        <PlayIcon />
                        <span>2750</span>
                      </VideoInfo>
                    </STooltip>
                  </a>
                  <a>
                    <STooltip content="Likes" className="mr-3">
                      <VideoInfo>
                        <LikeIcon />
                        <span>200</span>
                      </VideoInfo>
                    </STooltip>
                  </a>
                  <a>
                    <STooltip content="Comments" className="mr-3">
                      <VideoInfo>
                        <CommentIcon />
                        <span>35</span>
                      </VideoInfo>
                    </STooltip>
                  </a>
                  <a>
                    <STooltip content="Collections">
                      <VideoInfo>
                        <CollectionIcon />
                        <span>10</span>
                      </VideoInfo>
                    </STooltip>
                  </a>
                </ViewsSection>
                <Description>
                  <p>
                    Some video description In some cases you might want to
                    change which tag or component a styled component renders.
                    This is common when building a navigation bar for example,
                    where there are a mix of anchor links and buttons but they
                    should be styled identically.
                  </p>
                  <Hashtag>#development</Hashtag>
                  <Hashtag>#node_js</Hashtag>
                  <Hashtag>#js</Hashtag>
                  <Hashtag>#ryan_dahl</Hashtag>
                  <Hashtag>#js_conf_eu</Hashtag>
                </Description>
                <CommentInput />
                <CommentSection>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </CommentSection>
              </Section>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
              <Section>
                <Shadow color={colors.accent_3}>
                  <SectionTitle className="mb-3">
                    <h5>Recommended</h5>
                    <RecommendationsIcon />
                  </SectionTitle>
                  <VideoCard className="mb-3" />
                  <VideoCard className="mb-3" />
                  <VideoCard className="mb-3" />
                  <VideoCard className="mb-3" />
                  <VideoCard className="mb-3" />
                  <VideoCard className="mb-3" />
                  <VideoCard className="mb-3" />
                </Shadow>
              </Section>
            </Col>
          </Container>
          <Modal />
        </main>
      </>
    );
  }
}

export default VideoPage;
