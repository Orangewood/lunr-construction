import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton, {
  ButtonColors,
} from "../../../../common/components/CustomButton";
import ProgressBar from "../progress-bar/components/ProgressBar";
import { useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../../../redux/actions';
const { setGroups, setUsers }  = actions;

const KioskHomeBody = (props) => { 

  const currentTime = new Date();
  const history = useHistory();
  const userRedirect = async () =>{
    history.push('/kiosk-user');
  }

  useEffect(()=>{
    async function initGroups(){
      if(!props?.admin?.groups){
        await props.setGroups();
      }
      if(props?.admin?.users.length === 0){
        await props.setUsers();
      }
    }
    
    initGroups()
  },[]);

  return (
    <>
      <div id='start-screen-body'>
        <div className="mb-5">
          <div id='start-screen-time'>
              {currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
          </div>
          <div id='start-screen-date'>
              {currentTime.toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
          </div>
        </div>
        <div className="mb-5">
          <CustomButton
            id='start-screen-button'
            color={ButtonColors.green}
            text={"Start User"}
            onClickedButton={userRedirect}
          />
        </div>
        <div id='start-screen-circles' className="mb-5">
          <Row>
            <Col>
              <ProgressBar
                progress={80}
                size={120}
                text={`Laborers`}
                strokeWidth={15}
                circleOneStroke='#7c7823'
                circleTwoStroke={"#21200f"}
              />
            </Col>
            <Col>
              <ProgressBar
                progress={80}
                size={120}
                text={`Mechanics`}
                strokeWidth={15}
                circleOneStroke='#28558c'
                circleTwoStroke={"#0c2644"}
              />
            </Col>
          </Row>
        </div>
        {props?.admin?.foremanInfo.firstName &&
          <div className="d-flex justify-content-center">
            <div id='start-screen-info' className="d-flex">
              {props?.admin?.foremanInfo?.profilePicture && 
                <div className={`profileimage ${!props?.admin?.foremanInfo?.profilePicture && 'default'}`} style={{ backgroundImage : `url(${props?.admin?.foremanInfo?.profilePicture})`}}></div>
              }
              <div>
                <div className="foreman-name mb-1">{props?.admin?.foremanInfo?.firstName} {props?.admin?.foremanInfo?.lastName }</div>
                <div>Foreman For {props?.admin?.jobcode?.label}</div>
                <div>{props?.admin?.foremanInfo?.phoneNumber} </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}

const mapDispatchToProps = {
  setGroups,
  setUsers
};

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(KioskHomeBody);
