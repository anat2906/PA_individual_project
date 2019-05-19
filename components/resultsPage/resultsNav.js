import React, { Component } from "react";
import styled from "styled-components";
import PT from "prop-types";
import Button from "../button/Button";

const SNav = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
  button {
    margin: 0 1em;
  }
`;

export default class ResultsNav extends Component {
  render() {
    return (
      <SNav {...this.props}>
        <Button
          value="videos"
          onClick={() => this.props.setActiveTab("videos")}
        >
          Videos
        </Button>
        <Button
          value="events"
          onClick={() => this.props.setActiveTab("events")}
        >
          Events
        </Button>
        <Button value="users" onClick={() => this.props.setActiveTab("users")}>
          Users
        </Button>
      </SNav>
    );
  }
}

ResultsNav.propTypes = {
  setActiveTab: PT.func
};
