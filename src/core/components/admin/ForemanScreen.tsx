import React, { useState } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "../../modules/AppList";
import ForemanBody from "./ForemanBody";
import "../../scss/admin/Admin.scss";

interface ForemanProps {
  onClickedSave: (appType: number) => void;
}

export default function Foreman(props: ForemanProps) {
  const { onClickedSave } = props;
  const [data, setData] = useState<any>()
  return (
    <>
      <BackgroundContainer split />
      <InformationContainer white>
        <ForemanBody  completedInformation={(list) => setData(list)}/>
      </InformationContainer>
      <CustomButton
        id={"foreman-save"}
        color={ButtonColors.orange}
        text={"Save Changes"}
        onClickedButton={() => {onClickedSave(AppList.home);
        console.log(data)}}
      />
    </>
  );
}
