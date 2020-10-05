import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../scss/kiosk/Kiosk.scss"

interface ClockOutHeaderProps {
  dayTotal: string;
  weekTotal: string;
  //Pass props from api timesheet here to be displayed below
}

export default function ClockOutHeader(props: ClockOutHeaderProps): JSX.Element {
  return (
    <Container className="clock-header">
      <Row>
        <Col xs={{span: 3, offset: 1}}>
          Day Total
          <Col>{props.weekTotal}</Col>
        </Col>
        <Col xs={{span: 4, offset: 0}}>
          Week Total
          <Col>{props.weekTotal}</Col>
        </Col>
      </Row>
    </Container>
  );
}
