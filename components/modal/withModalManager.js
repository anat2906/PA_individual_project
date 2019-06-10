import React from "react";
import { ModalContext } from "./ModalManager";

const withModalManager = WrappedComponent => {
  const Wrapper = props => (
    <ModalContext.Consumer>
      {manager_context => {
        return <WrappedComponent {...props} modal_manager={manager_context} />;
      }}
    </ModalContext.Consumer>
  );
  return Wrapper;
};

export default withModalManager;
