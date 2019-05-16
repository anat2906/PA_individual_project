import React, { Component } from "react";
import PT from "prop-types";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import Comment from "./Comment";

const SList = styled.div`
  margin-left: ${ifProp(
    "level", "4em" , 0
  )}
`;

export default class CommentsList extends Component {
  render() {
    return (
      <SList {...this.props}>
        <Comment />
      </SList>
    );
  }
}

CommentsList.propTypes = {
  level: PT.bool
};
