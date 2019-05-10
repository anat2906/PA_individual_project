import React from "react";
import styled from "styled-components";
import { Row } from "styled-bootstrap-grid";
import { colors } from "../../config/var";

const LoginIcon = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
  }
  img {
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
        <img src="static/icons/svg/language.svg" />
      </LoginIcon>
      <LoginIcon>
        <p> Login </p>
        <img src="static/icons/svg/user.svg" />
      </LoginIcon>
    </Row>
  );
}

export default HeaderLogin;
