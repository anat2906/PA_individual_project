import React, { Component } from "react";
import styled from "styled-components";
import { ReplyIcon, DeleteIcon, EditIcon } from "../icons";
import Emoji from "../emoji/Emoji";
import { font_size } from "../../config/var";

const SFooter = styled.div`
  display: flex;
  padding: 0.5em 0;
  justify-content: space-between;
  svg {
    margin-left: 0.5em;
    width: 20px;
    height: 20px;
  }
  span {
    font-family: "PT Mono";
    font-size: ${font_size.text_sm};ch
  }
`;

export default class CommentFooter extends Component {
  constructor(props) {
    super(props);
  }

  onCancelEdit = () => {
      console.log("cancel")
    this.props.onCancelEdit();
  };

  onToggleEdit = () => {
    this.props.onToggleEdit();
  };

  render() {
    return (
      <SFooter>
        {this.props.is_editable ? (
          <>
            <a onClick={this.onCancelEdit}>
              Cancel
              <Emoji size={font_size.text_sm}>🙅🏼</Emoji>
            </a>
            <a>
              Submit<Emoji size={font_size.text_sm}>📝</Emoji>
            </a>
          </>
        ) : (
          <>
            <div>
              <span>{this.props.item.date}</span>
            </div>
            <div className="d-flex">
              <a onClick={this.onToggleEdit}>
                <EditIcon />
              </a>
              <a>
                <DeleteIcon />
              </a>
              <a>
                <ReplyIcon />
              </a>
            </div>
          </>
        )}
      </SFooter>
    );
  }
}
