import React, { Component } from "react";
import styled from "styled-components";
import { colors, font_size } from "../../config/var";
import PT from "prop-types";

const SForm = styled.div`
  padding: 0.5em;
`;

const SErrorMsg = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${font_size.text};
  color: red;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: false
    };
  }
  render() {
    return (
        <SForm>
            <SErrorMsg>{this.props.error_messages.err}</SErrorMsg>
        </SForm>
    );
  }
}

Form.propTypes = {
    error_messages: PT.array
}

export default Form
