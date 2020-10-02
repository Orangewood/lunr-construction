import React, { Children, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import KioskHome from "./KioskHome";
import CameraScreen from "./CameraScreen";
import ClockScreen from "./ClockScreen";
import { AppList } from "../../modules/AppList";

interface KioskAppProps {}

export default function KioskApp(props: KioskAppProps) {
  const [selectedApp, setSelectedApp] = useState<AppList>(AppList.kioskHome);

  return (
    <>
      {selectedApp === AppList.kioskHome && (
        <KioskHome onClickedStart={(value) => setSelectedApp(value)} />
      )}
      {selectedApp === AppList.cameraScreen && <CameraScreen />}

      {selectedApp === AppList.clockInAndOut && (
        <ClockScreen onClickedHome={(value) => setSelectedApp(value)} />
      )}
    </>
  );
}
