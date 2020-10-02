import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import "../../scss/kiosk/Kiosk.scss";

interface KioskHomeBodyProps {
  onClickedStart: ()  => void;
}

export default function KioskHomeBody(props: KioskHomeBodyProps) {
  const {onClickedStart} = props;
  const currentTime = new Date();
  return (
    <Container fluid id='start-screen-body'>
      <Row id="start-screen-time">
        {currentTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Row>
      <Row>
        {currentTime.toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })}
      </Row>
      <div id='start-screen-button'>
        <CustomButton
          color={ButtonColors.green}
          text={"Start"}
          onClickedButton={() => onClickedStart()}
        />
      </div>
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
    </Container>
  );
}
