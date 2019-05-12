import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";

const SComment = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
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
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 0.5em;
  }
`;

class Comment extends Component {
  render() {
    return (
      <SComment>
        <div>
          <img src="static/icons/svg/user.svg" />
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
