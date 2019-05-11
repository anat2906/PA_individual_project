import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";

const Heading = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1em;
  color: ${colors.dark_1};
`;

class Title extends Component {
  render() {
    return <Heading {...this.props}>{this.props.children}</Heading>;
  }
}

export default Title;
