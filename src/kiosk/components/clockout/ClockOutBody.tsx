import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
var dateFormat = require("dateformat");

interface ClockOutBodyProps {
  selectedUser: any; // Change to class from the api call
}

export default function ClockOutHeader(props: ClockOutBodyProps): JSX.Element {
  const now = new Date();
  const [time, setTime] = useState<Date>(now);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <h2>Clock Out</h2>
          {/* User address, time, date */}
          {props.selectedUser}
          {/* Medium time or short time? */}
          <Col>{dateFormat(time, "shortTime")}</Col> <Col>{"Test"}</Col>
        </Col>
        <Col md={2}>
          {/* Users Picture here, title under */}
          {props.selectedUser}
          {time.getSeconds()}
          <Col>{"test"}</Col>
        </Col>
      </Row>
    </Container>
  );
}
