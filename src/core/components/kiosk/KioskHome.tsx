import React from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "../../modules/AppList";
import KioskHomeBody from "./KioskHomeBody";

interface KioskHomeProps {
  onClickedStart: (app: number) => void;
}

export default function KioskHome(props: KioskHomeProps) {
  const { onClickedStart } = props;
  return (
    <>
      <BackgroundContainer building />
      <InformationContainer kioskHome>
        <KioskHomeBody onClickedStart={() => onClickedStart(AppList.clockInAndOut)} />
      </InformationContainer>
    </>
  );
}
