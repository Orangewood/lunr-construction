import React from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "./AdminApp";

interface ForemanProps {
  onClickedSave: (appType: number) => void;
}

export default function Foreman(props: ForemanProps) {
  const { onClickedSave } = props;
  return (
    <>
      <BackgroundContainer split />
      <InformationContainer></InformationContainer>
      <CustomButton
        id={"client-save"}
        color={ButtonColors.orange}
        text={"Save Changes"}
        onClickedButton={() => onClickedSave(AppList.home)}
      />
    </>
  );
}
