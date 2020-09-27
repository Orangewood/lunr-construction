import React, { Children, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import StartScreen from "./StartScreen";

interface ClockOutPageProps {}

export default function ClockOutPage(props: ClockOutPageProps) {
  return (
    <>
      <BackgroundContainer building />
      <InformationContainer white={false}>
        <StartScreen />
      </InformationContainer>
      {/* <CustomButton
        color={ButtonColors.green}
        text={"Start"}
        onClickedButton={() => console.log("test")}
      /> */}
    </>
  );
}
