import React from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import Button from "../button/Button";

const SNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
  button {
    margin: 0 1em;
  }
`;

export default function ResultsNav(props) {
  return (
    <SNav>
      <Button>Videos</Button>
      <Button>Events</Button>
      <Button>Users</Button>
    </SNav>
  );
}
