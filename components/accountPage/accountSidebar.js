import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import { ColorBlock, ColorBlockTitle, ColorBlockContent } from "../block/Block";
import Emoji from "../emoji/Emoji";
import { Link } from "../../routes";

const SSidebar = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    a {
      font-size: ${font_size.text};
      font-weight: 700;
      text-transform: capitalize;
      &:hover {
        text-decoration: underline !important;
        color: inherit !important;
      }
    }
  }
`;

const SDelete = styled.div`
  padding-top: 3em;
  a {
    color: red !important;
    font-size: ${font_size.text_sm};
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
              <Link route="account_settings">
                <a>
                  Profile <Emoji size={font_size.text_sm}>👩‍💻</Emoji>
                </a>
              </Link>
            </li>
            <li>
              <Link route="account_subscriptions">
                <a>
                  Subscriptions <Emoji size={font_size.text_sm}>➕</Emoji>
                </a>
              </Link>
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
