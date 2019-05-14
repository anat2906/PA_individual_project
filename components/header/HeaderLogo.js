import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

const Logo = styled.div`
  background-image: url("static/logo/logo.png");
  margin: 0;
  width: 55px;
  height: 37px;
  background-size: contain;
  cursor: pointer;
`;

class HeaderLogo extends Component {
  render() {
    return (
      <Link href="/">
        <Logo />
      </Link>
    );
  }
}
export default HeaderLogo;
