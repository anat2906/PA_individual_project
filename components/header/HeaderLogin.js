import React, { Component } from "react";
import styled from "styled-components";
import { Row } from "styled-bootstrap-grid";
import { colors, font_size } from "../../config/var";
import { LanguageIcon, UserIcon } from "../icons";
import Dropdown from "../dropdown/Dropdown";

const SLoginIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: end;
  p, a {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text};
  }
  svg {
    margin: 0;
    padding: 0;
    margin-left: 0.5em;
    width: 23px;
    height: 23px;
  }
`;

const SLangList = styled.ul`
  li {
    a {
      text-transform: uppercase;
      &:hover {
        text-decoration: underline !important;
      }
    }
  }
`

function LangList(props) {
  return (
    <SLangList>
      <li><a>ru</a></li>
      <li><a>eng</a></li>
    </SLangList>
  );
}

function LoginIcon() {
  return (
    <SLoginIcon>
      <p>Languages</p>
      <LanguageIcon />
    </SLoginIcon>
  );
}

class HeaderLogin extends Component {
  render() {
    return (
      <Row className="justify-content-end align-items-center">
        <Dropdown trigger={<LoginIcon />} className="mr-3">
          <LangList />
        </Dropdown>
        <SLoginIcon>
          <a> Login </a>
          <UserIcon />
        </SLoginIcon>
      </Row>
    );
  }
}

export default HeaderLogin;
