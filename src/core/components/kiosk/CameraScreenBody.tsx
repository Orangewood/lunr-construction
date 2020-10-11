import React from "react";
import { Container, Row } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import "../../scss/kiosk/Kiosk.scss";

interface CameraScreenBodyProps {
  client: string;
}

export default function CameraScreenBody(props: CameraScreenBodyProps) {
  const { client } = props;
  const currentTime = new Date();
  return (
    <>
      <Container className='camera-screen-body'>
        <Row id='camera-screen-welcome'>
          <p id='camera-screen-welcome-text'>
            {`Welcome to`} <br />
            {client}
          </p>
        </Row>
        <Row id='camera-screen-date'>
          {currentTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          {""}
          {currentTime.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </Row>
      </Container>
      {/* <AsyncSelect className='worker-search' placeholder={'Enter your name'}></AsyncSelect> */}
    </>
  );
}
