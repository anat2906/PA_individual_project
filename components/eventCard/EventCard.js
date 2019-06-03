import React from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import STooltip from "../tooltip/Tooltip";
import { FInfo } from "../videoCard/VideoCard";
import { VideoIcon, FollowersIcon } from "../icons";
import EventImg from "../../static/react-europe.png";

const SEventCard = styled.div`
  cursor: pointer;
  text-align: center;
`;

const SCardAvatar = styled.div`
  border-radius: 50%;
  margin: 0 auto;
  width: 60%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: relative;
    width: 100% !important;
    height: 100% !important;
    border-radius: 50%;
  }
`;

const STitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text};
  color: ${colors.dark_1};
  position: absolute;
  padding: 0.3em;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    line-height: 0px;
    font-weight: 700;
    background: white;
  }
`;

const SFooter = styled.div`
  padding: 0;
  margin: 0 auto;
  text-align: center;
  padding-top: 0.5em;
  text-align: center;
`;

const FItem = styled.div`
  display: flex;
  justify-content: center;
  span {
    margin-right: 1em;
    font-family: "PT Mono";
    font-size: ${font_size.text_sm};
    color: ${colors.dark_1};
  }
`;

export default function EventCard(props) {
  return (
    <SEventCard>
      <SCardAvatar>
        <img src={EventImg} />
        <STitle>
          <span>React Europe</span>
        </STitle>
      </SCardAvatar>
      <SFooter>
        <FItem>
          <span>Subscribers</span>
          <STooltip content="Subscribers">
            <FInfo>
              <FollowersIcon />
              <span>200</span>
            </FInfo>
          </STooltip>
        </FItem>
        <FItem>
          <span>Videos</span>
          <STooltip content="Videos">
            <FInfo>
              <VideoIcon />
              <span>200</span>
            </FInfo>
          </STooltip>
        </FItem>
      </SFooter>
    </SEventCard>
  );
}
