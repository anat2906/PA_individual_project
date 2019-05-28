import React, { Component } from "react";
import { observer } from "mobx-react";
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

@observer
export default class CommentSection extends Component {
  render() {
    return (
      <div>
        <Header>
          {this.props.CommentsList.children.length === 1 ? (
            <p>{this.props.CommentsList.children.length} comment</p>
          ) : (
            <p>{this.props.CommentsList.children.length} comments</p>
          )}
        </Header>
        <div className="pr-5">
          <CommentAdd CommentsList={this.props.CommentsList} />
          <CommentsList level={false} CommentsList={this.props.CommentsList} />
        </div>
      </div>
    );
  }
}
