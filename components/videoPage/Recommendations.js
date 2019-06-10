import React, { Component } from "react";
import { colors } from "../../config/var";
import VideoCard from "../videoCard/VideoCard";
import { SectionTitle } from "../sidebar/Sidebar";
import { RecommendationsIcon } from "../icons";
import Shadow from "../box-shadow/Shadow";

export default class Recommendations extends Component {
  render() {
    return (
      <Shadow color={colors.accent_3}>
        <SectionTitle className="mb-3">
          <h5>Recommended</h5>
          <RecommendationsIcon />
        </SectionTitle>
        <VideoCard className="mb-3" />
        <VideoCard className="mb-3" />
        <VideoCard className="mb-3" />
        <VideoCard className="mb-3" />
        <VideoCard className="mb-3" />
        <VideoCard className="mb-3" />
        <VideoCard className="mb-3" />
      </Shadow>
    );
  }
}
