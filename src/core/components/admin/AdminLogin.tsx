import React, { useState, useEffect } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";

import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import config from "../../../utils/config";
import actions from "../../../redux/actions";
const { setSigninPin, setUserAuthenticated } = actions;
const { DEFAULT_PIN } = config;

const AdminLogin = (props): JSX.Element => {
  const history = useHistory();
  const [checkInput, setInput] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: any) => {
    setInput(e.target.value);
  };
  const checkAuth = async () => {
    history.push("/dashboard");
    // if (props?.admin?.setpin === checkInput) {
    //   await props?.setUserAuthenticated(true);
    //   history.push("/dashboard");
    // } else {
    //   setError("Invalid pin");
    // }
  };

  // useEffect(() => {
  //   if (!props?.admin?.token) {
  //     history.push("/");
  //   }
  //   if (!props?.admin?.setpin) {
  //     props?.setSigninPin(DEFAULT_PIN);
  //   }
  //   if (props?.admin?.authenticated) {
  //     props?.setUserAuthenticated(false);
  //   }
  // }, []);

  return (
    <>
      <BackgroundContainer brand />
      <div className="text-center admin-login">
        {error &&
          <div className="alert alert-danger mb-4">{error}</div>
        }
        <input 
          type="password" 
          className="form-control mb-5" 
          id='authorize-text' 
          name="checktoken" 
          placeholder='Pin goes here...' 
          onChange={onChange}
        />
        <div className='d-flex justify-content-center mb-4'>
          <CustomButton
            id='authorize-button'
            text={"Sign In"}
            color={ButtonColors.green}
            onClickedButton={checkAuth}
          />
        </div>
        <Link
          className='custom-button-small custom-button-blue position-relative ml-auto mr-auto'
          to={{ pathname: "/kiosk-home" }}
        >
          <span className='button-text'>Show Kiosk</span>
        </Link>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setSigninPin,
  setUserAuthenticated,
};
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
