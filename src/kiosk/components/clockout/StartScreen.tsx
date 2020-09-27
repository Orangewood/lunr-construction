import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../scss/ClockOutBody.scss";


interface StartScreenProps {}

export default function StartScreen(props: StartScreenProps) {
  return (
    <div id='start-screen-body'>
      <Row>Time date</Row>

      <Row>
        <Col>1st Circle here</Col>
        <Col>2nd Circle here</Col>
      </Row>

      <Row>
        <Col>Picture</Col>
        <Col>
          <Row>FirstName LastName</Row>
          <Row>Foreman for ClientName</Row>
          <Row>123456789</Row>
        </Col>
      </Row>
    </div>
  );
}
