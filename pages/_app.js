import React from "react";
import { GridThemeProvider } from "styled-bootstrap-grid";
import App, { Container } from "next/app";
import ModalManager from "../components/modal/ModalManager";

const gridTheme = {
  col: {
    padding: 5
  },
  container: {
    padding: 5
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GridThemeProvider gridTheme={gridTheme}>
          <ModalManager>
            <Component {...pageProps} />
          </ModalManager>
        </GridThemeProvider>
      </Container>
    );
  }
}
