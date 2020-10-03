import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "../../modules/AppList";
import ClientSearch from "./ClientSearch"
import "../../scss/admin/Admin.scss";

interface ClientSelectProps {
  apiInformation?: any; //Api class to be sent here
  onClickedSave: (appType: number) => void;
}

export default function ClientSelect(props: ClientSelectProps) {
  const { apiInformation, onClickedSave } = props;
  return (
    <>
      <BackgroundContainer solid />
      <InformationContainer white>
          <ClientSearch />
      </InformationContainer>
      <CustomButton
        id={"client-save"}
        color={ButtonColors.orange}
        text={"Save Changes"}
        onClickedButton={() => onClickedSave(AppList.home)}
      />
    </>
  );
}
