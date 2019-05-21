import React, { Component } from "react";
import { clone } from "mobx-state-tree";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";

class CommentEdit extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange = event => {
    console.log(event.target.value)
    this.props.item.changeText(event.target.value);
  };

  render() {
    return (
      <>
        <CommentHeader item={this.props.item} is_add_form={false} />
        <CommentForm onTextChange={this.onTextChange} item={this.props.item} />
      </>
    );
  }
}

export default CommentEdit;
