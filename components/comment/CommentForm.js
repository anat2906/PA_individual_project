import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import Emoji from "../emoji/Emoji";

const Textarea = styled.textarea`
  width: 100%;
  min-height: 2em;
  font-family: "PT Mono";
  font-size: ${font_size.text};
  color: ${colors.dark_2};
  backround: none;
  border: none;
  &:focus {
    outline: none;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 0;
  a {
    margin-left: 0.5em;
    font-weight: 700;
    font-size: ${font_size.text_sm};
    font-family: "Roboto", sans-serif;
  }
`;

export default class CommentForm extends Component {
  render() {
    return (
      <>
        <Textarea   placeholder="Leave your comment here..."/>
        <Footer>
          <a>Cancel<Emoji size={font_size.text_sm}>🙅🏼</Emoji></a>
          <a>Submit<Emoji size={font_size.text_sm}>📝</Emoji></a>
        </Footer>
      </>
    );
  }
}
