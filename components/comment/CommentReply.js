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
          reply_to_first_name={"Dan"}
          reply_to_last_name={"Smith"}
        />
        <CommentForm />
      </SComment>
    );
  }
}
