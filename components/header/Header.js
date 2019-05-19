import React, { Component } from "react";
import styled from "styled-components";
import { Container, Col } from "styled-bootstrap-grid";
import { colors } from "../../config/var";
import HeaderLogo from "./HeaderLogo";
import HeaderLogin from "./HeaderLogin";
import HeaderSearch from "./HeaderSearch";
import SearchDropdown from "./searchdropdown/SearchDropdown";

class Header extends Component {
  render() {
    const Header = styled.header`
      padding: 0.5em 0;
      box-shadow: 0px 2px 3px 0px ${colors.shadow};
      background: white;
      top: 0;
      left: 0;
      position: sticky;
      z-index: 5;
    `;
    return (
      <Header>
        <Container className="d-flex align-items-center">
          <Col xs={4} sm={4} md={2} lg={2}>
            <HeaderLogo />
          </Col>
          <Col xs={4} sm={4} md={7} lg={7}>
            <HeaderSearch />
            <SearchDropdown />
          </Col>
          <Col xs={4} sm={4} md={3} lg={3}>
            <HeaderLogin />
          </Col>
        </Container>
      </Header>
    );
  }
}

export default Header;
