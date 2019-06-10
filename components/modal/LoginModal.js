import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import Modal from "./Modal";
import LoginForm from "../forms/LoginForm";
import Emoji from "../emoji/Emoji";

const SButton = styled.div`
  display: flex;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text};
  font-weight: 700;
  color: ${colors.accent_4};
  margin-top: 0.5em;
`;

export default class LoginModal extends Component {
  render() {
    return (
      <Modal header="Login" {...this.props}>
        <LoginForm>
          <SButton>
            <a>Login</a>
            <Emoji size={font_size.text_sm}>✅</Emoji>
          </SButton>
        </LoginForm>
      </Modal>
    );
  }
}
