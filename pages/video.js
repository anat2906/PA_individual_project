import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";
import { Container, Col } from "styled-bootstrap-grid";
import { colors } from "../config/var";
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
import { CommentInput } from "../components/comment";

const Global = createGlobalStyle`
      * {
        font-family: "Roboto", sans-serif;
      }

      body {
        background: white;
        color: ${colors.dark_1};
      }

      a {
        text-decoraton: none;
        color: inherit;
        cursor: pointer;
      }
      
      .slick-next:before {
        font-size: 30px;
        color: ${colors.dark_3};
        content: "➭";
        transform: translateX(-50%);
        position: absolute;
        line-height: 0;
        display: none;
      }
      .slick-prev:before {
        transform: translateX(-50%);
        position: absolute;
        line-height: 0;
        font-size: 30px;
        color: ${colors.dark_3};
        content: "➭";
        transform: translateX(-50%);
        margin-top: -50%;
        display: none;
      }
      .slick-prev {
        transform: scaleX(-1);
      }
      
      @keyframes shadow {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `;
const gridTheme = {
  col: {
    padding: 5
  },
  container: {
    padding: 5
  }
};

const DateSection = styled.div`
  display: flex;
  align-items: end;
  p {
    font-family: "PT Mono";
    font-size: 15px;
    font-weight: 700;
    margin-right: 0.5em;
  }
  span {
    color: ${colors.dark_2};
    font-family: "PT Mono";
    font-size: 13px;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.shadow};
  padding-bottom: 1em;
  img {
    width: 35px;
    height: 35px;
    margin-right: 0.5em;
  }
  h6 {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
`;

const ViewsSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
`;

const VideoInfo = styled(FInfo)`
  img {
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
    font-size: 16px;
    margin-bottom: 0.5em;
  }
`;

class VideoPage extends Component {
  render() {
    return (
      <>
        <Global />
        <GridThemeProvider gridTheme={gridTheme}>
          <>
            <Header />
            <main>
              <Container className="d-flex">
                <Col xs={9} sm={9} md={9} lg={9}>
                  <Section>
                    <Player className="mb-3" />
                    <Title>Video Title</Title>
                    <DateSection>
                      <p>Published at</p>
                      <span>25/09/2019</span>
                    </DateSection>
                    <AuthorSection>
                      <div className="d-flex align-items-center">
                        <img src="static/icons/svg/user.svg" />
                        <h6>Username</h6>
                      </div>
                      <Button>Follow</Button>
                    </AuthorSection>
                    <ViewsSection>
                      <a>
                        <STooltip content="Views" className="mr-3">
                          <VideoInfo>
                            <img src="static/icons/svg/tv.svg" />
                            <span>2750</span>
                          </VideoInfo>
                        </STooltip>
                      </a>
                      <a>
                        <STooltip content="Likes" className="mr-3">
                          <VideoInfo>
                            <img src="static/icons/svg/favourite.svg" />
                            <span>200</span>
                          </VideoInfo>
                        </STooltip>
                      </a>
                      <a>
                        <STooltip content="Comments" className="mr-3">
                          <VideoInfo>
                            <img src="static/icons/svg/chat-alt.svg" />
                            <span>35</span>
                          </VideoInfo>
                        </STooltip>
                      </a>
                      <a>
                        <STooltip content="Collections">
                          <VideoInfo>
                            <img src="static/icons/svg/star.svg" />
                            <span>10</span>
                          </VideoInfo>
                        </STooltip>
                      </a>
                    </ViewsSection>
                    <Description>
                      <p>
                        Some video description In some cases you might want to
                        change which tag or component a styled component
                        renders. This is common when building a navigation bar
                        for example, where there are a mix of anchor links and
                        buttons but they should be styled identically.
                      </p>
                      <Hashtag>#development</Hashtag>
                      <Hashtag>#node_js</Hashtag>
                      <Hashtag>#js</Hashtag>
                      <Hashtag>#ryan_dahl</Hashtag>
                      <Hashtag>#js_conf_eu</Hashtag>
                    </Description>
                    <CommentInput />
                  </Section>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  <Section>
                    <Shadow color={colors.accent_3}>
                      <SectionTitle className="mb-3">
                        <h5>Recommended</h5>
                        <img src="static/icons/svg/happy-face.svg" />
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
            </main>
          </>
        </GridThemeProvider>
      </>
    );
  }
}

export default VideoPage;
