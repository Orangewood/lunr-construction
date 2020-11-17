import React, { useState } from "react";
import InformationContainer from "../../../common/components/InformationContainer";
import Logo from "../../../common/components/Logo";
import Camera from "./camera";
import CameraScreenBody from "./components/CameraScreenBody";
import Loader from "../../../common/components/Loader";
import { Link , useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import "../../scss/kiosk/Kiosk.scss";

const CameraScreen = (props) =>{
  let [loading, setLoading] = useState(true);

  return (
    <div id="camera-screen">
      {loading && <Loader fullPage/>}

      <Logo/>
      <Camera setLoading={setLoading}/>
      <InformationContainer>
        <CameraScreenBody client={"test"} />
      </InformationContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps)(CameraScreen);
