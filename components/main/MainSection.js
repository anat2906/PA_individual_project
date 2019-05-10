import React, { Component } from "react";
import styled from "styled-components";

class MainSection extends Component {
  render() {
    const Section = styled.section`
      width: 100%;
      padding: 15px 0;
      margin: 0;
    `;
    return <Section>{this.props.children}</Section>;
  }
}

export default MainSection;
