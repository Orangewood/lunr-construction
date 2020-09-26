import React, { useState } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "./AdminApp";
import ForemanBody from "./ForemanBody";

interface ForemanProps {
  onClickedSave: (appType: number) => void;
}

export default function Foreman(props: ForemanProps) {
  const { onClickedSave } = props;
  const [data, setData] = useState<any>()
  return (
    <>
      <BackgroundContainer split />
      <InformationContainer>
        <ForemanBody  completedInformation={(list) => setData(list)}/>
      </InformationContainer>
      <CustomButton
        id={"client-save"}
        color={ButtonColors.orange}
        text={"Save Changes"}
        onClickedButton={() => {onClickedSave(AppList.home);
        console.log(data)}}
      />
    </>
  );
}
