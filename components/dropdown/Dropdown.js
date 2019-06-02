import React, { Component } from "react";
import styled from "styled-components";
import PT from "prop-types";
import { colors, font_size } from "../../config/var";

const SDropdownContent = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: absolute;
  margin-top: 0.5em;
  padding: 0.5em;
  background: ${colors.light_1};
  left: 0;
  z-index: 5;
  width: 100%;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text};
  text-align: left;
  ul {
    padding: 0;
    margin: 0;
    text-align: left;
    list-style-type: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Trigger = styled.div`
  text-align: right;
  margin: 0;
  padding: 0;
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <Trigger onClick={this.toggleDropdown}>{this.props.trigger}</Trigger>
        <SDropdownContent isOpen={this.state.isOpen}>
          {this.props.children}
        </SDropdownContent>
      </Wrapper>
    );
  }
}

Dropdown.propTypes = {
  trigger: PT.any
};

export default Dropdown;
