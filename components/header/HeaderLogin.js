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
    width: 35px;
    height: 35px;
  }
`;

function HeaderLogin(props) {
  return (
    <Row className="justify-content-end align-items-center">
      <LoginIcon className="mr-3">
      <p>Languages</p>
        <img src="https://img.icons8.com/carbon-copy/100/000000/language.png " />
      </LoginIcon>
      <LoginIcon>
        <p> Login </p>
        <img src="https://img.icons8.com/carbon-copy/100/000000/user-female.png" />
      </LoginIcon>
    </Row>
  );
}

export default HeaderLogin;
