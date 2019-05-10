import React from "react";
import styled from "styled-components";
import { colors } from "../../config/var";

const BaseBlock = styled.div`
  padding: 1em 1.5em;
  border: 1px solid ${colors.shadow};
  box-shadow: 1px 1px 0px ${colors.shadow};
`;

const CBlock = styled.div`
  background: none;
  padding: 0;
  margin: 0;
  border: 1px solid ${colors.brand};
  box-shadow: 5px 5px 0px 0px ${colors.brand};
  border-radius: 3px;
`;
const CBlockTitle = styled.div`
 width: 100%;
 background: ${colors.brand};
 padding: 0.3em 0.5em;
`;

const CBlockContent = styled.div`
  padding: 1em 1.5em;
`

function Block(props) {
  return <BaseBlock {...props}>{props.children}</BaseBlock>;
}


function ColorBlock(props) {
  return <CBlock {...props}>{props.children}</CBlock>;
}

function ColorBlockTitle(props) {
  return <CBlockTitle {...props}>{props.children}</CBlockTitle>;
}

function ColorBlockContent(props) {
  return <CBlockContent {...props}>{props.children}</CBlockContent>;
}


export { Block, ColorBlock, ColorBlockTitle, ColorBlockContent };
