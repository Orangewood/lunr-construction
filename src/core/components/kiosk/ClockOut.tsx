import React, { Children, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import StartScreen from "./StartScreen";
import CheckIn from "./CheckIn";

interface ClockOutPageProps {}

export default function ClockOutPage(props: ClockOutPageProps) {
  const [showClockedIn, setShowClockIn] = useState<boolean>(false);
  return (
    <>
      <BackgroundContainer building />

      {!showClockedIn && (
        <InformationContainer white={false}>
          <StartScreen
            onClickedStart={(clicked: boolean) => setShowClockIn(clicked)}
          />
        </InformationContainer>
      )}
      {showClockedIn && <CheckIn />}
    </>
  );
}
