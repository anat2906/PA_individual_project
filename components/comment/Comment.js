import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import PT from "prop-types";
import { colors, font_size } from "../../config/var";
import { Block } from "../block/Block";
import CommentHeader from "./CommentHeader";
import CommentsList from "./CommentsList";
import CommentEdit from "./CommentEdit";
import CommentFooter from "./CommentFooter";

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

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
  }

  onToggleEdit() {
    this.setState({ isEditing: true });
  }

  onCancelEdit() {
    this.setState({ isEditing: false });
  }

  renderEditable() {
    return <CommentEdit item={this.props.item} />;
  }
  render() {
    return (
      <SComment>
        {this.state.isEditing ? (
          this.renderEditable()
        ) : (
          <>
            <CommentHeader is_add_form={false} item={this.props.item} />
            <Body>
              <p>{this.props.item.text}</p>
            </Body>
          </>
        )}
        <CommentFooter
          is_editable={this.state.isEditing}
          item={this.props.item}
          onToggleEdit={this.onToggleEdit}
          onCancelEdit={this.onCancelEdit}
        />
      </SComment>
    );
  }
}

export default observer(Comment);
