import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { colors, font_size } from "../../config/var";

const Global = createGlobalStyle`
@keyframes shadow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
`;

const SButton = styled.div`
  position: relative;
  width: auto;
  max-height: 31px;
  margin: 0.5em 0;
  button {
    width: 100%;
    z-index: 1;
    position: relative;
    max-height: 31px;
    font-family: "Roboto";
    font-size: ${font_size.text};
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.dark_1};
    padding: 0.1em 0.8em;
    background: white;
    border: none;
    border: 3px solid ${colors.dark_1};
    border-radius: 3px;
    box-shadow: 3px 3px 0px ${colors.dark_1};
  }
  &:hover {
    button {
      box-shadow: none;
    }
    div {
      display: block;
    }
  }
`;

const SShadow = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  height: 31px;
  width: 100%;
  border-radius: 3px;
  background: repeating-linear-gradient(
    45deg,
    ${colors.dark_1},
    ${colors.dark_1} 4px,
    white 4px,
    white 8px
  );
  background-size: 500%;
  bottom: -5px;
  right: -7px;
  animation: shadow linear 25s;
  animation-iteration-count: infinite;
  &:focus {
    outline: none;
  }
`;

class Button extends Component {
  render() {
    return (
      <>
        <Global />
        <SButton>
          <button {...this.props}>{this.props.children}</button>
          <SShadow />
        </SButton>
      </>
    );
  }
}

export default Button;
