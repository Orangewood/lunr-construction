import React ,{useEffect} from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import { connect } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import "../../scss/admin/Admin.scss";

import config from '../../../utils/config';
import actions from '../../../redux/actions';
const { setSigninPin }  = actions;
const { DEFAULT_PIN } = config;

const  AdminHome = (props) => {
  const history = useHistory();

  useEffect(()=>{
    if( !props?.admin?.setpin) {
      props?.setSigninPin(DEFAULT_PIN)
    }
    if(props?.admin?.token){
      history.push('/signin')
    }
  },[])

  return (
    <>
      
      <BackgroundContainer brand />
      <Link className="button-round d-flex align-items-center justify-content-center setup-btn" to={{pathname: '/oauth/login',}}>
        <span>Start Setup</span>
      </Link>
    </>
  );
}

const mapDispatchToProps = {
  setSigninPin,
};
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);