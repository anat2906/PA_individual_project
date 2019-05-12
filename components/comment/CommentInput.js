import React from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import { Col } from "styled-bootstrap-grid";
import Emoji from "../emoji/Emoji";

const Input = styled.textarea`
  font-family: "PT Mono";
  font-size: 13px;
  border: 1px solid ${colors.dark_2};
  border-radius: 3px;
  padding: 0.3em;
  width: 100%;
  display: block;
  color: ${colors.dark_3};
  margin-bottom: 0.5em;
  &:focus {
    outline: none !important;
  }
`;

const Wrapper = styled.div`
  background: ${colors.light_2};
  padding: 1em;
  margin-top: 1em;
  border-radius: 3px;
  width: 50%;
  a {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    &:hover {
      font-weight: 700;
    }
  }
`;

function CommentInput(props) {
  return (
    // <Col xs={8} sm={8} md={8} lg={8}>
      <Wrapper>
        <Input type="text" placeholder="Leave your comment :)" rows="3"/>
        <a>
          Submit <Emoji size="13px">👨‍💻</Emoji>
        </a>
      </Wrapper>
    // </Col>
  );
}

export default CommentInput;
