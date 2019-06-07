import React, { Component } from "react";
import { Container, Col } from "styled-bootstrap-grid";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";

const SEventHeader = styled.div`
  display: flex;
  padding: 1.5em 0.5em;
  align-items: center;
  background: ${colors.light_1};
  border-radius: 3px;
  justify-content: center;
`;

const MainInfoEvent = styled.div`
  display: flex;
  align-items: center;
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
    <SEventHeader>
        <MainInfoEvent>
          <MainInfoTitle>
            <h2>This is title of event</h2>
          </MainInfoTitle>
          <MainInfoDate>25/05/2019</MainInfoDate>
          <MainInfoDesc>Loooong description of event is here!</MainInfoDesc>
        </MainInfoEvent>
    </SEventHeader>
  );
}
