import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";
import CustomButton, { ButtonColors } from "../../../common/components/CustomButton";
import "../../scss/admin/Admin.scss";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import actions from '../../../redux/actions';
const { logout }  = actions;

const  AdminOptionsList = (props) => {
  const history = useHistory();

  const onLogout = (e: any) => {
    props.logout()
    history.push('/')
 };

  return (
    <>
      <BackgroundContainer solid />
      <InformationContainer white>
        <div className='admin-menu-body mb-5'>
          <ListGroup style={{ border: "none" }}>
            <ListGroup.Item>
              <Link to={{ pathname: '/client'}}>
                <Row className="align-items-center">
                  <Col xs={10} sm={10}>
                    Select Client
                  </Col>
                  <Col xs={2} sm={2}>
                    <span className="right-chevron">&#8250;</span>
                  </Col>
                </Row>
                {props?.admin?.jobcode &&
                  <p className="text-muted mb-0">{props?.admin?.jobcode?.label}</p>
                }
              </Link>
            </ListGroup.Item>
          </ListGroup>
          {/* <ListGroup>
            <ListGroup.Item>
              <Link to={{ pathname: '/thermometer'}}>
                <Row className="align-items-center">
                  <Col xs={10} sm={10}>
                    Select the Thermometer
                  </Col>
                  <Col xs={2} sm={2}>
                    <span className="right-chevron">&#8250;</span>
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          </ListGroup> */}
          <ListGroup>
            <ListGroup.Item>
              <Link to={{ pathname: '/set-background'}}>
                <Row>
                  <Col xs={10} sm={10}>
                    Set Background Image
                  </Col>
                  <Col xs={2} sm={2}>
                    <span className="right-chevron">&#8250;</span>
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Link to={{ pathname: '/set-logo'}}>
                <Row>
                  <Col xs={10} sm={10}>
                    Set Logo Image
                  </Col>
                  <Col xs={2} sm={2}>
                    <span className="right-chevron">&#8250;</span>
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Link to={{ pathname: '/foreman'}}>
                <Row>
                  <Col xs={10} sm={10}>
                    Set Foreman Info
                  </Col>
                  <Col xs={2} sm={2}>
                        <span className="right-chevron">&#8250;</span>
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Link to={{ pathname: '/kiosk-config'}}>
                <Row>
                  <Col xs={10} sm={10}>
                    Set Max Clock out Time
                  </Col>
                  <Col xs={2} sm={2}>
                      {props?.admin?.maxClockOutTime}
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              <Link to={{ pathname: '/changepin'}}>
                <Row>
                  <Col xs={10} sm={10}>
                    Set Admin Pin
                  </Col>
                  <Col xs={2} sm={2}>
                      {props?.admin?.setpin}
                  </Col>
                </Row>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="d-flex">
          <Link 
            className="custom-button-small custom-button-green position-relative" 
            to={{pathname: '/kiosk-home',}}>
              <span className='button-text'>Show Kiosk</span>
          </Link>
          <div className="ml-auto">
            <CustomButton
                id='authorize-button'
                text={"Logout"}
                small={true}
                color={ButtonColors.blue}
                onClickedButton={onLogout}
              />
            </div>
          </div>
      </InformationContainer>
    </>
  );
}


const mapDispatchToProps = {
  logout
};
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(AdminOptionsList);
