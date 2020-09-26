import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "./AdminApp";

interface AdminOptionsListProps {
  clickedApp: (app: number) => void;
}
export default function AdminOptionsList(props: AdminOptionsListProps) {
  const { clickedApp } = props;
  return (
    <>
      <BackgroundContainer solid />
      <InformationContainer>
        <Container className='admin-menu-body'>
          <ListGroup style={{border: 'none'}}>
            <ListGroup.Item>
              <Row>
                <Col xs={10} sm={10}>
                  Select Client
                </Col>
                <Col xs={2} sm={2}>
                  <button onClick={() => clickedApp(AppList.client)}>
                    Test
                  </button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={10} sm={10}>
                  Select the Thermometer
                </Col>
                <Col xs={2} sm={2}>
                  <button onClick={() => clickedApp(AppList.thermometer)}>
                    Test
                  </button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={10} sm={10}>
                  Set Admin Pin
                </Col>
                <Col xs={2} sm={2}>
                  wat
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={10} sm={10}>
                  Set Background Image
                </Col>
                <Col xs={2} sm={2}>
                  <button onClick={() => clickedApp(AppList.background)}>
                    Test
                  </button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={10} sm={10}>
                  Set Logo Image
                </Col>
                <Col xs={2} sm={2}>
                  <button onClick={() => clickedApp(AppList.logoImage)}>
                    Test
                  </button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col xs={10} sm={10}>
                  Set Foreman Info
                </Col>
                <Col xs={2} sm={2}>
                  <button onClick={() => clickedApp(AppList.foreman)}>
                    Test
                  </button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </InformationContainer>
    </>
  );
}
