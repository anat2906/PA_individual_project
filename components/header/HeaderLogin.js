import React from "react";
import styled from "styled-components";
import { Row } from "styled-bootstrap-grid";
import { colors, font_size } from "../../config/var";
import { LanguageIcon, UserIcon } from "../icons";

const LoginIcon = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text};
  }
  svg {
    margin-left: 0.5em;
    width: 25px;
    height: 25px;
  }
`;

function HeaderLogin(props) {
  return (
    <Row className="justify-content-end align-items-center">
      <LoginIcon className="mr-3">
        <p>Languages</p>
        <LanguageIcon />
      </LoginIcon>
      <LoginIcon>
        <p> Login </p>
        <UserIcon />
      </LoginIcon>
    </Row>
  );
}

export default HeaderLogin;
