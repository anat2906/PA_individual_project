import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";

const SearchIcon = styled.a`
  img {
    transform: rotate(0.9turn);
    width: 27px;
    height: 27px;
  }
`;
const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: none;
  background: ${colors.light_1};
  border-radius: 3px;
  width: 100%;
  padding-right: 0.2em;
`;
const Input = styled.input`
  background: none;
  width: 95%;
  border: none;
  font-family: "PT Mono";
  padding: 0.2em 0.3em;
  &:focus {
    outline: none;
  }
`;

class HeaderSearch extends Component {
  render() {
    return (
      <SearchBox>
        <Input type="text" placeholder="search" />
        {/* <SearchIcon> */}
          {/* <img src="https://img.icons8.com/carbon-copy/100/000000/search.png" /> */}
        {/* </SearchIcon> */}
      </SearchBox>
    );
  }
}

export default HeaderSearch;
