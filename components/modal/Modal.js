import React, { Component } from "react";
import styled from "styled-components";
import { Block } from "../block/Block";
import { colors, font_size } from "../../config/var";

const ModalHeader = styled.div`
  background: ${colors.light_1};
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text};
  padding: 0.5em 1em;
  border-bottom: 1px solid ${colors.light_1};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: ${font_size.text};
    font-weight: 700;
  }
`;

const ModalBody = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 0.5em 1em;
  p,
  span {
    font-size: ${font_size.text};
  }
`;

const SModal = styled(Block)`
  max-width: 40vw;
  max-height: 80vh;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 20;
  opacity: 1;
  background: white;
  padding: 0;
  margin: 0;
`;

const ModalFade = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 100%;
  min-height: 100vh;
  background: white;
  opacity: 0.6;
  z-index: 15;
  overflow: hidden;
  display: block;
`;
class Modal extends Component {
  render() {
    return (
      <ModalFade>
        <SModal>
          <ModalHeader>Here is MODAAAAAL</ModalHeader>
          <ModalBody>
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsum
          </ModalBody>
        </SModal>
      </ModalFade>
    );
  }
}

export default Modal;
