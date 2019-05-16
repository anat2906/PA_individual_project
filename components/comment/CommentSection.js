import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";

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
        </Header>
        <div className="pr-5">
          <CommentAdd />
          <CommentsList level={false}/>
        </div>
      </div>
    );
  }
}
