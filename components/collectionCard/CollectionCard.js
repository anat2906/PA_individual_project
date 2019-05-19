import React from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";

const SCard = styled.div`
  position: relative;
  margin-bottom: 0.5em;
  img {
    width: 100%;
    height: auto;
  }
`;

const STitle = styled.div`
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.dark_1};
  padding: 0.3em;
  span {
    font-family: "PT Mono";
    font-weight: 700;
    margin: 0;
    padding: 0;
    line-height: 0px;
  }
`;

export default function CollectionCard(props) {
  return (
    <SCard>
      <img src="static/video.jpg" />
      <STitle>
        <span>My favourite</span>
      </STitle>
    </SCard>
  );
}
