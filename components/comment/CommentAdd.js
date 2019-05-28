import React, { Component } from "react";
import { CommentsListItem } from "../../mobx/models/CommentsListModel";
import CommentHeader from "./CommentHeader";
import CommentForm from "./CommentForm";
import CommentFooter from "./CommentFooter";
import { SComment } from "./Comment";

class CommentAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: CommentsListItem.create({
        first_name: "New",
        last_name: "Author",
        text: "",
        date: "02/02/2019",
        likes_count: 0,
        children: [],
        reply_to: ""
      })
    };
    this.onAdd = this.onAdd.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this)
  };

  onAdd = () => {
    this.props.CommentsList.addItem(this.state.entry);
    this.setState({
      entry: CommentsListItem.create({
        first_name: "New",
        last_name: "Author",
        text: "",
        date: "02/02/2019",
        likes_count: 0,
        children: [],
        reply_to: ""
      })
    });
  };

  onCancelEdit = () => {
    this.setState({
      entry: CommentsListItem.create({
        first_name: "New",
        last_name: "Author",
        text: "",
        date: "02/02/2019",
        likes_count: 0,
        children: [],
        reply_to: ""
      })
    });
  };

  onTextChange = event => {
    this.state.entry.changeText(event.target.value);
  };

  render() {
    return (
      <SComment>
        <CommentHeader is_add_form={true} item={this.state.entry} />
        <CommentForm onTextChange={this.onTextChange} item={this.state.entry} />
        <CommentFooter is_editable={true} onSaveEdit={this.onAdd} onCancelEdit={this.onCancelEdit}/>
      </SComment>
    );
  }
}

export default CommentAdd;