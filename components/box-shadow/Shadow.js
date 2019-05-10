import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";

class Shadow extends Component {
  render() {
    const BoxShadow = styled.div`
    border: 1px solid ${this.props.color};
    box-shadow: 5px 5px 0px 0px ${this.props.color};
    padding: 1em;
    background: ${colors.light_1};
    border-radius: 3px;
`;
    return <BoxShadow>{this.props.children}</BoxShadow>;
  }
}

export default Shadow;
