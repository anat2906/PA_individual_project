import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { TextInputForm } from "../form";
import { VideoCard, EventCard } from "./SearchDropdownCard";

const SInput = styled(TextInputForm)`
  background: ${colors.light_1};
  width: 100%;
`;

const DropdownSection = styled.div`
  width: 100%;
  padding: 0.3em 0.2em;
  padding-top: 1em;
  h4 {
    font-size: ${font_size.text};
    color: ${colors.dark_2};
    margin: 0;
  }
  a {
    font-weight: bold;
    font-size: ${font_size.text_sm};
    color: ${colors.dark_2};
  }
`;

class HeaderSearch extends Component {
  render() {
    return (
      <SInput type="text" placeholder="search"/>
    );
  }
}

export default HeaderSearch;
