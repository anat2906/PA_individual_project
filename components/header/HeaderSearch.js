import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import { TextInputForm } from "../form";

const SInput = styled(TextInputForm)`
  background: ${colors.light_1};
  width: 100%;
`;

class HeaderSearch extends Component {
  render() {
    return <SInput type="text" placeholder="search" />;
  }
}

export default HeaderSearch;
