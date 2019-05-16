import React, { Component } from "react";
import styled, { css } from "styled-components";
import { colors, font_size } from "../../config/var";
import Textarea from "react-textarea-autosize";

const FormFieldStyles = css`
  font-size: ${font_size.text};
  font-family: "PT Mono";
  color: ${colors.dark_2};
  background: none;
  border: none;
  padding: 0.2em 0.3em;
  border-radius: 3px;
  &: focus {
    outline: none;
  }
`;

const SInput = styled.input`
  ${FormFieldStyles}
`;

const STextarea = styled(Textarea)`
  ${FormFieldStyles}
  min-height: 2em;
`;

export default class FormField extends Component {
  render() {
    return (
      <>
        {this.props.type === "textarea" ? (
          <STextarea {...this.props} />
        ) : this.props.type === "text" ? (
          <SInput type="text" {...this.props} />
        ) : this.props.type === "password" ? (
          <SInput type="password" {...this.props} />
        ) : this.props.type === "email" ? (
          <SInput type="email" {...this.props} />
        ) : null}
      </>
    );
  }
}
