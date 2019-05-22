import React, { Component } from "react";
import {observer} from "mobx-react";
import PT from "prop-types";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import Comment from "./Comment";

const SList = styled.div`
  margin-left: ${ifProp(
    "level", "4em" , 0
  )}
`;
class CommentsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SList {...this.props}>
        {
          this.props.CommentsList.items.map ((item, idx) => <Comment key={idx} item={item}/>
          )
        }
      </SList>
    );
  }
}

CommentsList.propTypes = {
  level: PT.bool
};

export default observer(CommentsList) 