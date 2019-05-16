import React, { Component } from "react";
import styled from "styled-components";
import PT from "prop-types";
import { colors, font_size } from "../../config/var";
import { Block } from "../block/Block";
import { ReplyIcon, DeleteIcon, EditIcon } from "../icons";
import CommentHeader from "./CommentHeader";
import CommentsList from "./CommentsList";

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
  }
  render() {
    return (
      <>
        <SComment>
          <CommentHeader
            is_add_form={false}
            reply_to_first_name={"Dan"}
            reply_to_last_name={"Smith"}
          />
          <Body>
            <p>
              some text some text some text some text some text some text some
              text some text{" "}
            </p>
          </Body>
          <Footer>
            <div>
              <span>15/05/2019</span>
            </div>
            <div className="d-flex">
              <a>
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
      </>
    );
  }
}

export default Comment;
