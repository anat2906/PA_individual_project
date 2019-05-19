import React from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { PlayIcon, PlaylistIcon } from "../icons";

const SCard = styled.div`
  position: relative;
  margin-bottom: 0.5em;
  img {
    filter: blur(1px);
    width: 100%;
    height: 80%;
  }
`;

const STitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text};
  color: ${colors.dark_1};
  font-weight: 700;
`;

const SPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SPlayItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  span {
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text_sm} !important;
    color: white;
    margin: 0;
    padding: 0;
  }
  svg {
    margin-right: 0.5em;
    color: white;
    stroke: white;
    width: 20px;
    height: 20px;
  }
`;

export default function CollectionCard(props) {
  return (
    <SCard>
      <img src="static/video.jpg" />
      <SPlay>
        <SPlayItem>
          <PlayIcon />
          <span>Play All</span>
        </SPlayItem>
        <SPlayItem>
          <PlaylistIcon />
          <span>5 videos</span>
        </SPlayItem>
      </SPlay>
      <STitle>
        <a>My Favourites</a>
      </STitle>
    </SCard>
  );
}
