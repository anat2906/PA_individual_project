import React, { Component } from "react";
import styled from "styled-components";
import CancelIcon from "../icons/CancelIcon";
import { Block } from "../block/Block";
import { colors, font_size } from "../../config/var";
import ReactModal from "react-modal";
import { ModalContext } from "./ModalManager";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "30vw",
    maxHeight: "70%",
    overflow: "auto",
    position: "absolute",
    opacity: "1",
    background: "white",
    padding: "0",
    margin: "0",
    borderRadius: "3px"
  }
};

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.light_3};
  border-bottom: 1px solid ${colors.shadow};
  padding: 0.5em;
  h5 {
    font-family: "Roboto", sans-serif;
    font-size: ${font_size.text};
    font-size: ${font_size.text};
    font-weight: 700;
    margin: 0;
    margin-right: 0.5em;
  }
`;

const ModalCancel = styled.div`
  svg {
    width: 15px;
    height: 15px;
  }
`;

const ModalBody = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 0.5em 1em;
  font-size: ${font_size.text};
`;

class Modal extends Component {
  componentDidMount() {
    this.props.addModal(this);
  }

  componentWillUnmount() {
    this.props.delModal(this);
  }

  close = () => {
    const { closeModal, name } = this.props;
    closeModal(name);
  };

  render() {
    const { isOpen, name } = this.props;
    return (
      <ReactModal isOpen={isOpen(name)} style={customStyles}>
        <ModalHeader>
          <h5>Modal header</h5>
          <ModalCancel>
            <a onClick={this.close}>
              <CancelIcon />
            </a>
          </ModalCancel>
        </ModalHeader>
        <ModalBody>{this.props.children}</ModalBody>
      </ReactModal>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ModalContext.Consumer>
    {value => <Modal {...{ ...props, ...value }} ref={ref} />}
  </ModalContext.Consumer>
));
