import React, { Component } from "react";
import { observer } from "mobx-react";
import PT from "prop-types";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import CommentAvatar from "./CommentAvatar";
import { LikeIcon, ReplyIcon } from "../icons";

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
`;

const AuthorName = styled.div`
  display: flex;
  margin-right: 1.5em;
  h6 {
    margin: 0;
    margin-left: 0.5em;
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text};
    font-weight: 700;
    color: ${colors.dark_1};
  }
`;

const Reply = styled.div`
  display: flex;
  span {
    margin: 0 0.5em;
  }
  svg {
    width: 10px;
    height: 10px;
  }
`;
@observer
export default class CommentHeader extends Component {
  render() {
    const { is_add_form, item } = this.props;
    return (
      <Header>
        <div className="d-flex align-items-center">
          <CommentAvatar />
          <AuthorName>
            <h6>{item.first_name}</h6>
            <h6>{item.last_name}</h6>
          </AuthorName>
          {item.reply_to ? (
            <Reply>
              <span>{item.reply_to}</span>
              <ReplyIcon />
            </Reply>
          ) : null}
        </div>
        {is_add_form ? null : (
          <div>
            <span className="mr-2">{item.likes_count}</span>
            <a onClick={item.addlike}>
              <LikeIcon />
            </a>
          </div>
        )}
      </Header>
    );
  }
}

CommentHeader.propTypes = {
  is_add_form: PT.bool,
  reply_to_first_name: PT.string
};
