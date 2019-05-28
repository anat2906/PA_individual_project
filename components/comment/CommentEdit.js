import React, { Component } from "react";
import { observer } from "mobx-react";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";
import CommentFooter from "./CommentFooter";
import { SComment } from "./Comment";

@observer
class CommentEdit extends Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange = event => {
    this.props.item.changeText(event.target.value);
  };

  render() {
    return (
      <SComment>
        <CommentHeader item={this.props.item} is_add_form={false} />
        <CommentForm
          onTextChange={this.onTextChange}
          item={this.props.item}
        />
        <CommentFooter is_editable={true} {...this.props}/>
      </SComment>
    );
  }
}

export default CommentEdit;
