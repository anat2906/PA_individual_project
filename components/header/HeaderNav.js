import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import HeaderSearch from "./HeaderSearch";
import Button from "../button/Button";

const Nav = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`;
const NavLink = styled.li`
  margin: 0 0.5em;
  padding: 0 0.5em;
  text-transform: uppercase;
  a {
    font-weight: 700;
  }
  &:hover {
    background: ${colors.brand};
    color: white;
    box-shadow: 3px 2px 0px 1px rgba(0, 0, 0, 0.75);
  }
`;
const CloseIcon = styled.a`
  margin-left: 1em;
  img {
    width: 27px;
    height: 27px;
  }
`;

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.toggleSearchBox = this.toggleSearchBox.bind(this);
    this.state = {
      displaySearchBox: false
    };
  }

  toggleSearchBox() {
    this.setState({ displaySearchBox: !this.state.displaySearchBox });
    console.log(this.state);
  }

  render() {
    const displaySearchBox = this.state.displaySearchBox;

    return (
      <div className="d-flex">
        {displaySearchBox ? (
          <>
            <HeaderSearch />
            <CloseIcon onClick={this.toggleSearchBox}>
              <img src="https://img.icons8.com/carbon-copy/100/000000/delete-sign.png" />
            </CloseIcon>
          </>
        ) : (
          <>
            <Nav>
              <NavLink>
                <a>Events</a>
              </NavLink>
              <NavLink>
                <a>Speakers</a>
              </NavLink>
              <NavLink>
                <a>Events</a>
              </NavLink>
              <Button>Speakers</Button>
            </Nav>
            <SearchIcon onClick={this.toggleSearchBox}>
              <img src="https://img.icons8.com/carbon-copy/100/000000/search.png" />
            </SearchIcon>
          </>
        )}
      </div>
    );
  }
}

export default HeaderNav;
