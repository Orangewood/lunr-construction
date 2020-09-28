import React from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";

interface CheckInProps {
  onPersonSelected: () => boolean;
}

export default function CheckIn(props: CheckInProps) {
  return (
    <>
      <BackgroundContainer solid />
      <InformationContainer white>
      </InformationContainer>
    </>
  );
}
