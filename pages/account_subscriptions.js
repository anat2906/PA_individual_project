import React, { Component } from "react";
import { Row, Col, Container } from "styled-bootstrap-grid";
import Head from "next/head";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import AccountForm from "../components/accountPage/accountForm";
import AccountSidebar from "../components/accountPage/accountSidebar";

export default class AccountPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Account Details</title>
        </Head>
        <Header />
        <main>
          <Container>
            <Section>
              <Row>
                <Col xs={3} sm={3} md={3} lg={3}>
                  <AccountSidebar />
                </Col>
                <Col xs={9} sm={9} md={9} lg={9}>
                  <div/>
                </Col>
              </Row>
            </Section>
          </Container>
        </main>
      </>
    );
  }
}
