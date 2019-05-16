import React from "react";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";
import { SComment } from "./Comment";

function CommentEdit(props) {
  return (
    <SComment>
      <CommentHeader is_add_form={false}/>
      <CommentForm />
    </SComment>
  );
}

export default CommentEdit;
