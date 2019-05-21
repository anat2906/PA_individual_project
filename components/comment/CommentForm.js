import React, { Component } from "react";
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
          onChange={() => {
            console.log("ch")
            this.props.onTextChange;
          }}
        />
      </>
    );
  }
}

export default CommentForm;
