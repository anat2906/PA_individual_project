import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import { colors, font_size } from "../../config/var";
import { ProfileAvatar } from "./ProfileAvatar";
import { VideoIcon } from "../icons";
import Button from "../button/Button";
import { GithubIcon, LinkedinIcon } from "../icons";

const SHeader = styled.div`
  display: flex;
  padding: 2em 1em;
  align-items: center;
  background: ${colors.light_1};
  border-radius: 3px;
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
`;

const MainInfoName = styled.div`
  h2 {
    font-size: ${font_size.title};
    color: ${colors.dark_1};
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;
const MainInfoBio = styled.p`
  font-family: "PT Mono";
  font-size: ${font_size.text};
  color: ${colors.dark_2};
  margin: 0.5em 0;
`;
const MainInfoContacts = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  padding-top: 1em;
  a {
    margin: 0;
    margin-right: 0.3em;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const AdditionalInfo = styled.div`
  margin: 0 auto;
`;
const AddInfoItem = styled.div`
  display: flex;
  font-family: "PT Mono";
  font-size: ${font_size.text};
  align-items: center;
  margin-bottom: 0.5em;
  h6 {
    font-family: "PT Mono";
    font-weight: 700;
    margin: 0;
    margin-right: 1em;
    padding: 0;
  }

  span {
    font-family: "PT Mono";
  }
`;

export default class ProfileHeader extends Component {
  render() {
    return (
      <SHeader>
        <Col xs={8} sm={8} md={8} lg={8}>
          <MainInfo>
            <Col xs={4} sm={4} md={4} lg={4}>
              <ProfileAvatar>
                <img src="static/profile.jpg" />
              </ProfileAvatar>
            </Col>
            <Col xs={8} sm={8} md={8} lg={8}>
              <MainInfoName>
                <h2>Name Lastname</h2>
                <MainInfoBio>Put your bio right here!</MainInfoBio>
              </MainInfoName>
              <Button>Follow</Button>
              <MainInfoContacts>
                <a>
                  <GithubIcon />
                </a>
                <a>
                  <LinkedinIcon />
                </a>
              </MainInfoContacts>
            </Col>
          </MainInfo>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4}>
          <AdditionalInfo>
            <AddInfoItem>
              <h6>Uploaded videos</h6>
              <span>200</span>
            </AddInfoItem>
            <AddInfoItem>
              <h6>Joined</h6>
              <span>20/07/2018</span>
            </AddInfoItem>
            <AddInfoItem>
              <h6>Following</h6>
              <span>20</span>
            </AddInfoItem>
            <AddInfoItem>
              <h6>Followers</h6>
              <span>20</span>
            </AddInfoItem>
          </AdditionalInfo>
        </Col>
      </SHeader>
    );
  }
}
