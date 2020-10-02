import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";

interface ClockScreenProps {}

export default function ClockScreen(props: ClockScreenProps) {
    const [clockIn, setClockIn] = useState<boolean>()
  return (
    <>
      <BackgroundContainer nested />
      <InformationContainer clock></InformationContainer>
      <CustomButton
        id="clock-screen-button"
        text={!clockIn ? "Clock Out" : "Clock In"}
        color={ButtonColors.orange}
        onClickedButton={() => console.log("orange")}
      />
      <CustomButton
        id="clock-screen-button-home"
        text={"Back to Home"}
        color={ButtonColors.blue}
        onClickedButton={() => console.log("green")}
      />
    </>
  );
}
