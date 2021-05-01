import React from "react";
import { Col, Container, Row } from "react-bootstrap";


interface ClockScreenBodyProps {
  clockIn?: boolean;
  jobcode?: any;
  user?: any;
}

export default function ClockScreenBody(props: ClockScreenBodyProps) {
  const { clockIn, jobcode, user } = props;
  const currentTime = new Date();

  return (
    <Container className="clock-screen-body mb-5">
      <Row>
        <Col>
          <h2>{clockIn ? "Clock In" : "Clock Out"}</h2>
          <p>
            {'test'}
          </p>
          <p className="mb-1">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p>
            {currentTime.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </Col>
        <Col>
          <div>
            <div className="user-image" style={{ backgroundImage : `url(${user?.profile_image_url})`}}></div>
            <div className="text-left">
              <div className="user-name">{user?.label}</div>
              <div className="user-group">{user?.group}</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
