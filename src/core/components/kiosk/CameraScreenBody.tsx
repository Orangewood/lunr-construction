import React from "react";
import { Container, Row } from "react-bootstrap";
import AsyncSelect from 'react-select/async';

interface CameraScreenBodyProps {
  client: string;
}

export default function CameraScreenBody(props: CameraScreenBodyProps) {
  const { client } = props;
  const currentTime = new Date();
  return (
    <Container>
      <Row>
        <Row>{`Welcome to ${client}`}</Row>
        <Row>
          {currentTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          {currentTime.toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </Row>
      </Row>
      <Row>
          <AsyncSelect></AsyncSelect>
      </Row>
    </Container>
  );
}
