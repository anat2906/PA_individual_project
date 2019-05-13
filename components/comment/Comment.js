import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { UserIcon, LikeIcon } from "../icons";

const SComment = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  margin-bottom: 1em;
  p,
  h6 {
    font-size: ${font_size.text} !important;
    margin: 0;
    padding: 0;
  }
  span {
    font-size: ${font_size.text_sm};
    color: ${colors.dark_3};
    margin: 0;
    margin-right: 0.5em;
    padding: 0;
  }

  a {
    font-size: ${font_size.text_sm};
    &:hover{
      font-weight: 700;
    }
  }

  svg {
    width: 30px;
    height: 30px;
    margin-right: 1em;
  }
`;

class Comment extends Component {
  render() {
    return (
      <SComment>
        <div>
          <UserIcon/>
        </div>
        <div>
          <h6>First name Last name</h6>
          <p>Some comment bla bla bla bla bla bla</p>
          <div className="d-flex">
            <span>5 minutes ago</span>
            <a>Reply</a>
          </div>
        </div>
      </SComment>
    );
  }
}

export default Comment;
