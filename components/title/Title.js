import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";

class Title extends Component {
    render() {
        const Heading  = styled.h2`
            font-family: "Roboto", sans-serif;
            font-size: 25px;
            font-weight: 700;
            margin-bottom: 1em;
            color: ${colors.dark_1};
        `
        return (
            <Heading {...this.props} >{this.props.children}</Heading>
        )
    }
}

export default Title