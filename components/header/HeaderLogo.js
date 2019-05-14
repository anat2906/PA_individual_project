import React, { Component } from "react";
import styled from "styled-components";

class HeaderLogo extends Component {
  render() {
    const Logo = styled.div`
      background-image: url("static/logo/logo.png");
      margin: 0;
      width: 55px;
      height: 37px;
      background-size: contain;
    `;
    return <Logo> </Logo>;
  }
}
export default HeaderLogo;
