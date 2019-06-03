import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "styled-bootstrap-grid";
import { colors, font_size } from "../../config/var";
import {
  TextareaForm,
  TextInputForm,
  PasswordInputForm,
  EmailInputForm,
  FileInputForm
} from "../form";
import Button from "../button/Button";

const SInputWrapper = styled.div`
  margin-bottom: 1em;
  input,
  textarea {
    border: 1px solid ${colors.dark_3};
  }
  textarea {
    min-height: 10em;
    min-width: 25em;
  }
  span {
    display: block;
    font-size: ${font_size.text};
    text-transform: capitalize;
    margin: 0;
    padding: 0;
  }
`;

const SFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.shadow} !important;
  border-radius: 3px;
  padding: 0.5em 1em;
  margin-bottom: 2em;
  legend {
    max-width: 20%;
    background-color: ${colors.light_1};
    color: ${colors.dark_1};
    font-weight: 700;
    padding: 0.2em 0.5em;
    font-size: ${font_size.title_sm};
    border-radius: 3px;
  }
`;

class AccountForm extends Component {
  render() {
    return (
      <form>
        <SFieldset>
          <legend>Profile Details</legend>
          <SInputWrapper>
            <span>first name</span>
            <TextInputForm placeholder="first name" id="first_name" />
          </SInputWrapper>
          <SInputWrapper>
            <span>last name</span>
            <TextInputForm placeholder="last name" id="last_name" />
          </SInputWrapper>
          <SInputWrapper>
            <span>login</span>
            <TextInputForm placeholder="login" id="login" />
          </SInputWrapper>
          <SInputWrapper>
            <span>password</span>
            <PasswordInputForm placeholder="password" id="password" />
          </SInputWrapper>
          <SInputWrapper>
            <span>email</span>
            <EmailInputForm placeholder="email" id="email" />
          </SInputWrapper>
          <SInputWrapper>
            <span>change avatar</span>
            <FileInputForm />
          </SInputWrapper>
          <SInputWrapper>
            <span>bio</span>
            <TextareaForm placeholder="bio" id="bio" />
          </SInputWrapper>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Button>Submit changes</Button>
          </Col>
        </SFieldset>
      </form>
    );
  }
}

export default AccountForm;
