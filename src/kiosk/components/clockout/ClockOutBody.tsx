import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../scss/ClockOutBody.scss"
var dateFormat = require("dateformat");


interface ClockOutBodyProps {
  selectedUser: any; // Change to class from the api call
}

export default function ClockOutHeader(props: ClockOutBodyProps): JSX.Element {
  const now = new Date();
  const [time, setTime] = useState<Date>(now);

  useEffect(() => {
   setInterval(() => {
      setTime(now);
    }, 1000);
  }, []);


  return (
    <div className="test-container">
      <Row>
        <Col>
          {/* <h2>Clock Out</h2> */}
          Clock Out
          {/* User address, time, date */}
          {props.selectedUser}
          {/* Medium time or short time? */}
         {dateFormat(time, "shortTime")}
        </Col>
        <Col>
          {/* Users Picture here, title under */}
          {props.selectedUser}
          {time.getSeconds()}
        </Col>
      </Row>
    </div>
  );
}
