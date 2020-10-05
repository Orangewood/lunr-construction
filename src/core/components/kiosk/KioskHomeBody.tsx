import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import "../../scss/kiosk/Kiosk.scss";

interface KioskHomeBodyProps {
  onClickedStart: () => void;
}

export default function KioskHomeBody(props: KioskHomeBodyProps) {
  const { onClickedStart } = props;
  const currentTime = new Date();
  return (
    <>
      <div id='start-screen-body'>
        <div id='start-screen-time'>
          <Row>
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Row>
        </div>
        <div id='start-screen-date'>
          <Row>
            {currentTime.toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </Row>
        </div>
        <div>
          <CustomButton
            id='start-screen-button'
            color={ButtonColors.green}
            text={"Start"}
            onClickedButton={() => onClickedStart()}
          />
        </div>
        <div id='start-screen-circles'>
          <Row>
            <Col>1st Circle here</Col>
            <Col>2nd Circle here</Col>
          </Row>
        </div>
        <div id='start-screen-info'>
          <Row>
            <Col>Picture</Col>
            <Col>test</Col>
          </Row>
        </div>
      </div>
    </>
  );
}
