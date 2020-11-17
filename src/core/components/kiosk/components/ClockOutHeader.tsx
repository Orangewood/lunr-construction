import React from "react";
import { Row, Col, Container } from "react-bootstrap";

interface ClockOutHeaderProps {
  dayTotal: any;
  weekTotal: any;
  //Pass props from api timesheet here to be displayed below
}

export default function ClockOutHeader(props: ClockOutHeaderProps): JSX.Element {
  return (
    <Container className="clock-header mb-2">
      <Row>
        <Col xs={{span: 5, offset: 1}}>
          Day Total
          <div className="clock-header-value">{props.dayTotal}</div>
        </Col>
        <Col xs={{span: 6, offset: 0}}>
          Week Total
          <div className="clock-header-value">{props.weekTotal}</div>
        </Col>
      </Row>
    </Container>
  );
}
