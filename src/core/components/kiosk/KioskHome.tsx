import React, { useEffect } from "react";
import InformationContainer from "../../../common/components/InformationContainer";
import Logo from "../../../common/components/Logo";
import KioskHomeBody from "./components/KioskHomeBody";
import { connect  } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import "../../scss/kiosk/Kiosk.scss";
import actions from '../../../redux/actions';
const { setUserAuthenticated }  = actions;

const KioskHome = (props) => {
  const history = useHistory();
  useEffect(()=>{
    if(!props?.admin?.token){
      history.push('/')
    }
    if(props?.admin?.authenticated) {
      props?.setUserAuthenticated(false);
    }
  },[]);

  return (
    <>
      <Logo/>
      <div className={`kiosk-start ${!props?.admin?.background && 'default'}`} style={{ backgroundImage : `url(${props?.admin?.background})` }}> Background Image Here </div>
      <InformationContainer kioskHome>
        <KioskHomeBody />
      </InformationContainer>
    </>
  );
}


const mapDispatchToProps = {
  setUserAuthenticated
};
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(KioskHome);

