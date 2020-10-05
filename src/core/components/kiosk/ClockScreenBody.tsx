import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../scss/kiosk/Kiosk.scss"

interface ClockScreenBodyProps {
  clockIn?: boolean;
  apiProps?: any; //Pass api information here
}

export default function ClockScreenBody(props: ClockScreenBodyProps) {
  const { clockIn, apiProps } = props;
  const currentTime = new Date();

  return (
    <Container className="clock-screen-body">
      <Row>
        <Col>
          <h2>{clockIn ? "Clock In" : "Clock Out"}</h2>
          <Row>
            {/*Pass props for construction site here */}
          </Row>
          <Row className="mx-2">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Row>
          <Row className="mx-2">
            {currentTime.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </Row>
        </Col>
        <Col>Picture here</Col>
      </Row>
    </Container>
  );
}
