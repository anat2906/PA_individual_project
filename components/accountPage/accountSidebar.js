import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { ColorBlock, ColorBlockTitle, ColorBlockContent } from "../block/Block";
import Emoji from "../emoji/Emoji";

const SSidebar = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    a {
      font-size: ${font_size.text};
      font-weight: 700;
      text-transform: uppercase;
      &:hover {
        text-decoration: underline !important;
      }
    }
  }
`;

const SDelete = styled.div`
  padding-top: 5em;
  a {
    color: red !important;
    font-size: ${font_size.text};
    &:hover {
      text-decoration: underline !important;
    }
  }
`;

export default class AccountSidebar extends Component {
  render() {
    return (
      <ColorBlock color={colors.accent_4}>
        <ColorBlockTitle color={colors.accent_4}>
          <h5>Settings</h5>
        </ColorBlockTitle>
        <ColorBlockContent>
          <SSidebar>
            <li>
              <a>
                Profile <Emoji size={font_size.text_sm}>👩‍💻</Emoji>
              </a>
            </li>
            <li>
              <a>
                Subscriptions <Emoji size={font_size.text_sm}>➕</Emoji>
              </a>
            </li>
          </SSidebar>
          <SDelete>
            <a>Delete My Account</a>
          </SDelete>
        </ColorBlockContent>
      </ColorBlock>
    );
  }
}
