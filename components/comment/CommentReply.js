import React, { Component } from "react";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";
import { SComment } from "./Comment";

export default class CommentReply extends Component {
  render() {
    return (
      <SComment>
        <CommentHeader
          is_add_form={true}
          reply_to = {this.props.item.reply_to}
        />
        <CommentForm />
      </SComment>
    );
  }
}
