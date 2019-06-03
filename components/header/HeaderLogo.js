import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "../../routes";
import LogoImg from "../../static/logo/logo.png"

const Logo = styled.div`
  background-image: url(${LogoImg});
  margin: 0;
  width: 55px;
  height: 37px;
  background-size: contain;
  cursor: pointer;
`;

class HeaderLogo extends Component {
  render() {
    return (
      <Link route="main">
        <Logo />
      </Link>
    );
  }
}
export default HeaderLogo;
