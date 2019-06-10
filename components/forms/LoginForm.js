import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import TextInputForm from "../form/TextInputForm";
import PasswordInput from "../form/PasswordInputForm";

const SWrapper = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
`;

const SInput = styled(TextInputForm)`
  border: 1px solid ${colors.dark_2};
`;
const SPassword = styled(PasswordInput)`
  border: 1px solid ${colors.dark_2};
  margin-top: 0.5em;
`;

class LoginForm extends Component {
  render() {
    return (
      <SWrapper>
        <SInput placeholder="username" />
        <SPassword placeholder="password" />
        {this.props.children}
      </SWrapper>
    );
  }
}

export default LoginForm;
