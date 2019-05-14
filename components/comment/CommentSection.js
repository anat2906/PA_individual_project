import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import Emoji from "../emoji/Emoji";
import CommentsList from "./CommentsList";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  padding-bottom: 0;
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text};
  a {
    font-weight: 700;
    font-size: ${font_size.text};
    font-family: "Roboto", sans-serif;
  }
`;

export default class CommentSection extends Component {
  render() {
    return (
      <div>
        <Header>
          <p>20 comments</p>
          <a>
            Add a comment <Emoji size={font_size.text}>📝</Emoji>
          </a>
        </Header>
        <CommentsList />
      </div>
    );
  }
}
