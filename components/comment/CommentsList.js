import React, { Component } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import CommentAdd from "./CommentAdd";
import CommentEdit from "./CommentEdit";

export default class CommentsList extends Component {
  render() {
    return (
      <div className="pr-5">
        <CommentAdd />
        <CommentEdit />
        <Comment />
        <Comment />
      </div>
    );
  }
}
