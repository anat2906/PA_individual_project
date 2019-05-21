import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { TextareaForm } from "../form";

const STextarea = styled(TextareaForm)`
  width: 100%;
`;

class CommentForm extends Component {
  render() {
    return (
      <>
        <STextarea
          placeholder="Leave your comment here..."
          value={this.props.item.text}
          onChange={this.props.onTextChange}
        />
      </>
    );
  }
}

export default CommentForm;
