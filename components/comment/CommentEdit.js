import React, { Component } from "react";
import { observer } from "mobx-react";
import { clone } from "mobx-state-tree";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";
import { SComment } from "./Comment";

class CommentEdit extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange = event => {
    this.props.item.changeText(event.target.value);
  };

  on;

  render() {
    return (
      <SComment {...this.props}>
        <CommentHeader item={this.props.item} is_add_form={false} />
        <CommentForm onTextChange={this.onTextChange} item={this.props.item} />
      </SComment>
    );
  }
}

export default observer(CommentEdit);
