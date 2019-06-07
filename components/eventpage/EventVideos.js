import React, {Component} from "react";
import styled from "styled-components";
import Shadow from "../box-shadow/Shadow";
import {Title} from "../title/Title";
import VideoCard from "../videoCard/VideoCard";
import {Col} from "styled-bootstrap-grid";

const SVideo = styled.div`
    padding: 0.5em;
`

export default class EventVideos extends Component {
    render() {
        return (
            <Shadow>
                <Title>Event Videos</Title>
                <div className="d-flex flex-wrap-wrap">
                    <Col xs={4} sm={4} md={4} lg={4}>
                        <VideoCard />
                    </Col>
                </div>
            </Shadow>
        )
    }
}