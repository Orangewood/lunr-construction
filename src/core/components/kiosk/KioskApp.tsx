import React, { Children, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import KioskHome from './KioskHome'
import CameraScreen from "./CameraScreen";
import ClockScreen from "./ClockScreen";

interface KioskAppProps {}

export default function KioskApp(props: KioskAppProps) {
  const [showCameraScreen, setShowCameraScreen] = useState<boolean>(false);
  const [showClockScreen, setShowClockScreen] = useState<boolean>(true)
  return (
    <>
      {/* <BackgroundContainer building />
      {!showCameraScreen && (
        <InformationContainer kioskHome>
          <KioskHome
            onClickedStart={(clicked: boolean) => setShowCameraScreen(clicked)}
          />
        </InformationContainer>
      )} */}
      {/* {showCameraScreen && <CameraScreen/>} */}

      {showClockScreen && <ClockScreen />}

      
    </>
  );
}
