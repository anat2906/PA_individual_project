import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import CommentAvatar from "./CommentAvatar";
import { LikeIcon } from "../icons";

const Header = styled.div`
  padding: 0.5em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
  span {
    font-family: "PT Mono";
    font-size: ${font_size.text_sm};
    color: ${colors.dark_3};
  }
  h6 {
    margin: 0;
    margin-left: 0.5em;
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text};
    font-weight: 700;
    color: ${colors.dark_1};
  }
`;

export default class CommentHeader extends Component {
  render() {
    return (
      <Header>
        <div className="d-flex align-items-center">
          <CommentAvatar />
          <h6>Name</h6>
          <h6>Last Name</h6>
        </div>
        <div>
          <LikeIcon />
          <span>10</span>
        </div>
      </Header>
    );
  }
}
