import React from "react";
import styled from "styled-components";

const Em = styled.span`
    font-size: 16px;
`

function Emoji(props) {
    return <Em>{props.children}</Em> 
}

export default Emoji