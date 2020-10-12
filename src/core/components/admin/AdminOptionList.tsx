import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "../../modules/AppList";
import "../../scss/admin/Admin.scss";

interface AdminOptionsListProps {
  clickedApp: (app: number) => void;
  setShowKiosk: (clicked: boolean) => void;
}
export default function AdminOptionsList(props: AdminOptionsListProps) {
  const { clickedApp, setShowKiosk } = props;
  return (
    <>
      <BackgroundContainer solid />
      <InformationContainer white>
        <Container className='admin-menu-body'>
          <ListGroup style={{ border: "none" }}>
            <ListGroup.Item>
              <Row>
                <Col xs={10} sm={10}>
                  Select Client
                </Col>
                <Col xs={2} sm={2}>
                  <a onClick={() => clickedApp(AppList.client)}>{">"}</a>
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
                  <a onClick={() => clickedApp(AppList.thermometer)}>{">"}</a>
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
                  <a onClick={() => clickedApp(AppList.background)}>{">"}</a>
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
                  <a onClick={() => clickedApp(AppList.logoImage)}>{">"}</a>
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
                  <a onClick={() => clickedApp(AppList.foreman)}>{">"}</a>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Container>
        <Button onClick={() => setShowKiosk(true) }>Show Kiosk</Button>
      </InformationContainer>
    </>
  );
}
