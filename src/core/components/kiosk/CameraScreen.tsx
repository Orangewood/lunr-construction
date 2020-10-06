import React from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";
import CameraScreenBody from "./CameraScreenBody";


interface CheckInProps {
  // onPersonSelected: () => boolean;
}

export default function CheckIn(props: CheckInProps) {
  return (
    <>
      <BackgroundContainer home />
      <InformationContainer>
        <CameraScreenBody client={"test"} />
      </InformationContainer>
    </>
  );
}
