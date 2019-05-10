import React, { Component } from "react";
import styled from "styled-components";

class HeaderLogo extends Component {
  render() {
    const Logo = styled.h4`
      font-family: "PT Mono";
      margin: 0;
    `;
    return <Logo>DT</Logo>;
  }
}
export default HeaderLogo;
