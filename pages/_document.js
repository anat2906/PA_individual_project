import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { createGlobalStyle, ServerStyleSheet } from "styled-components";
import { colors } from "../config/var";

const Global = createGlobalStyle`
      * {
        font-family: "Roboto", sans-serif;
      }

      body {
        background: white;
        color: ${colors.dark_2};
      }

      a {
        text-decoraton: none;
        color: inherit;
        cursor: pointer;
      }
      
      .slick-slider {
        margin-top: 1.5em;
        margin-bottom: 0 !important;
      }

      .slick-next:before {
        font-size: 25px;
        color: ${colors.dark_1};
        content: "➞";
        position: absolute;
        line-height: 0;
        display: block;
      }
      .slick-prev:before {
        position: absolute;
        line-height: 0;
        font-size: 25px;
        color: ${colors.dark_1};
        content: "➞";
        display: block;
      }
      .slick-prev {
        top: -12%;
        left: 0;
        transform: scaleX(-1);
        opacity: 1;
      }

      .slick-next {
        transform: none;
        top: -12%;
        right: 0;
        opacity: 1;
      }
      
      @keyframes shadow {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(MyApp => props =>
      sheet.collectStyles(<MyApp {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <html>
        <Head>
          <link rel="shorcut icon" href="static/logo/logo.png" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Mono&amp;subset=cyrillic"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i,900,900i&amp;subset=cyrillic,cyrillic-ext,latin-ext"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Global />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}