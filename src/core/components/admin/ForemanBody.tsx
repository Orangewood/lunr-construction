import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
      <Container id='foreman-body'>
        <Row>
          <Col>Picture</Col>
          <Col>
            <Row>First name Last Name</Row>
            <Row>Foreman for Clientname</Row>
          </Col>
        </Row>
        <Row>
          <h4>Personal Information</h4>
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
          <h4>Contact Information</h4>
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
