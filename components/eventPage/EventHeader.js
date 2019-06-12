import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import EventImg from "../../static/event.svg";
import Shadow from "../box-shadow/Shadow";
import Hashtag from "../hashtag/Hashtag";

const SEventHeader = styled.div`
  display: flex;
  padding: 1.5em 0.5em;
  align-items: flex-start;
  background: ${colors.light_2};
  border-radius: 3px;
  justify-content: flex-start;
`;

const MainEventAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SImgWrapper = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid ${colors.shadow};
  height: 150px;
  width: 150px;
  margin-right: 2em;
  img {
    position: relative;
    width: auto;
    height: 100%;
    border-radius: 50%;
  }
`;

const MainInfoEvent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const MainInfoTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0;

  h2 {
    font-size: ${font_size.title};
    color: ${colors.dark_1};
    font-weight: 700;
    margin: 0;
    margin-right: 0.5em;
    padding: 0;
  }
`;

const MainInfoDesc = styled.p`
  font-family: "PT Mono";
  font-size: ${font_size.text};
  color: ${colors.dark_2};
`;

const MainInfoDate = styled.p`
  font-family: "PT Mono";
  font-size: ${font_size.text};
`;

export default function EventHeader() {
  return (
    <Shadow color={colors.accent_2}>
      <SEventHeader>
        <MainEventAvatar>
          <SImgWrapper>
            <img src={EventImg} />
          </SImgWrapper>
        </MainEventAvatar>
        <MainInfoEvent>
          <MainInfoTitle>
            <h2>React Amsterdam</h2>
          </MainInfoTitle>
          <MainInfoDate>25/05/2019 - 26/05/2019</MainInfoDate>
          <MainInfoDesc>
            Loooong description of event is here!
          </MainInfoDesc>
          <div>
            <Hashtag>JS</Hashtag> <Hashtag>React</Hashtag>{" "}
            <Hashtag>ReactAmsterdam</Hashtag>
          </div>
        </MainInfoEvent>
      </SEventHeader>
    </Shadow>
  );
}
