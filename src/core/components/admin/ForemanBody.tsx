import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../scss/admin/Admin.scss";

interface ForemanBodyProps {
  completedInformation: (data: string[]) => void;
}

export default function ForemanBody(props: ForemanBodyProps) {
  const { completedInformation } = props;
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  useEffect(() => {
    if (firstName && lastName && phoneNumber) {
      let formInformationArray = [firstName, lastName, phoneNumber];
      completedInformation(formInformationArray);
    }
  }, [firstName, lastName, phoneNumber]);

  return (
    <>
      <div id='foreman-top-container'>
        <Row>
          <Col>Picture</Col>
          <Col>
            <Row>First name Last Name</Row>
            <Row>Foreman for Clientname</Row>
          </Col>
        </Row>
      </div>
      <Container id='foreman-body'>
        <Row>
          <h4>
            <b>Personal Information</b>
          </h4>
        </Row>
        <Row>
          <Col>
            <Row>First Name</Row>
            <Row>
              <input
                onChange={(e: any) => setFirstName(e.target.value)}
              ></input>
            </Row>
            <Row>
              <hr
                style={{
                  width: "90%",
                  textAlign: "left",
                  marginLeft: "0",
                  borderColor: "black",
                }}
              ></hr>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>Last Name</Row>
            <Row>
              <input onChange={(e: any) => setLastName(e.target.value)}></input>
            </Row>
            <Row>
              <hr
                style={{
                  width: "90%",
                  textAlign: "left",
                  marginLeft: "0",
                  borderColor: "black",
                }}
              ></hr>
            </Row>
          </Col>
        </Row>
        <Row>
          <h4>
            <b>Contact Information</b>
          </h4>
        </Row>
        <Row>
          <Col>
            <Row>Phone Number</Row>
            <Row>
              <input
                onChange={(e: any) => setPhoneNumber(e.target.value)}
              ></input>
            </Row>
            <Row>
              <hr
                style={{
                  width: "90%",
                  textAlign: "left",
                  marginLeft: "0",
                  borderColor: "black",
                }}
              ></hr>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
