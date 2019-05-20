import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import PT from "prop-types";
import { colors, font_size } from "../../config/var";
import { Block } from "../block/Block";
import { ReplyIcon, DeleteIcon, EditIcon } from "../icons";
import CommentHeader from "./CommentHeader";
import CommentsList from "./CommentsList";
import CommentEdit from "./CommentEdit";

export const SComment = styled(Block)`
  margin: 0.5em;
  margin-left: 0;
  margin-bottom: 1em;
  padding: 0.5em 1em;
`;
const Body = styled.div`
  p {
    font-family: "PT Mono";
    padding: 0;
    margin: 0;
    font-size: ${font_size.text};
    color: ${colors.dark_2};
  }
`;
const Footer = styled.div`
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
    font-size: ${font_size.text_sm};
  }
`;

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
  }

  onToggleEdit() {
    this.setState({ isEditing: true });
  };

  renderEditable() {
    console.log(this.props)
    return <CommentEdit item={this.props.item} />;
  }
  render() {
    return this.state.isEditing ? (
      this.renderEditable()
    ) : (
      <SComment>
        <CommentHeader
          is_add_form={false}
          item={this.props.item}
        />
        <Body>
          <p>{this.props.item.text}</p>
        </Body>
        <Footer>
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
        </Footer>
      </SComment>
    );
  }
}

export default observer(Comment);
