import React from "react";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";
import { SComment } from "./Comment";

function CommentAdd(props) {
  return (
    <SComment>
      <CommentHeader is_add_form={true} />
      <CommentForm />
    </SComment>
  );
}

export default CommentAdd;
