import React from "react";
import { Row, Col, Container } from "react-bootstrap";

interface ClockOutHeaderProps {
  dayTotal: string;
  weekTotal: string;
}

export default function ClockOutHeader(props: ClockOutHeaderProps): JSX.Element {
  return (
    <Container fluid>
      <Row>
        <Col>
          Day Total
          <Col>{props.weekTotal}</Col>
        </Col>
        <Col>
          Week Total
          <Col>{props.weekTotal}</Col>
        </Col>
      </Row>
    </Container>
  );
}
