import React, { Component } from "react";
import { observer } from "mobx-react";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";
import { SComment } from "./Comment";

class CommentEdit extends Component {
  render() {
    return (
      <SComment {...this.props}>
        <CommentHeader is_add_form={false} />
        <CommentForm item={this.props.item}/>
      </SComment>
    );
  }
}

export default observer(CommentEdit);
