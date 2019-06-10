import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import VideoCard from "../videoCard/VideoCard";
import { SectionTitle } from "../sidebar/Sidebar";
import Shadow from "../box-shadow/Shadow";

const SPlaylist = styled.div`
  max-height: 350px;
  overflow: auto;
`;

export default class Recommendations extends Component {
  render() {
    return (
      <Shadow color={colors.accent_1} className="mb-3">
          <SectionTitle className="mb-3">
            <h5>Playlist</h5>
          </SectionTitle>
        <SPlaylist>
          <VideoCard className="mb-3" />
          <VideoCard className="mb-3" />
          <VideoCard className="mb-3" />
        </SPlaylist>
      </Shadow>
    );
  }
}
