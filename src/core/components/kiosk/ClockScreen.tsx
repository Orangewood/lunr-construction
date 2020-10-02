import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "../../modules/AppList";
import ClockScreenBody from "./ClockScreenBody";

interface ClockScreenProps {
  onClickedHome: (app: number) => void;
  clockIn?: boolean;
}

export default function ClockScreen(props: ClockScreenProps) {
  const {onClickedHome, clockIn} = props;
  return (
    <>
      <BackgroundContainer nested />
      <InformationContainer clock>
        <ClockScreenBody />
      </InformationContainer>
      <CustomButton
        id='clock-screen-button'
        text={!clockIn ? "Clock Out" : "Clock In"}
        color={ButtonColors.orange}
        onClickedButton={() => console.log("orange")}
      />
      <CustomButton
        id='clock-screen-button-home'
        text={"Back to Home"}
        color={ButtonColors.blue}
        onClickedButton={() => onClickedHome(AppList.kioskHome)}
      />
    </>
  );
}
