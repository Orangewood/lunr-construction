import React, { useState } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import AdminApp from "./AdminApp";
import AuthorizeScreen from "./AuthorizeScreen";

interface AdminMenuProps {}

export default function AdminMenu(props: AdminMenuProps): JSX.Element {
  const [clickedLogIn, setClickedLogIn] = useState<boolean>(false);
  return (
    <>
      {!clickedLogIn && (
        <>
          <BackgroundContainer inverted />
          <AuthorizeScreen onLoginButtonClick={() => setClickedLogIn(true)} />
          <CustomButton
            id='authorize-button'
            text={"Sign In"}
            color={ButtonColors.blue}
            onClickedButton={() => setClickedLogIn(true)}
          />
        </>
      )}
      {/* TO DO: Boolean from T-sheets authentication to be passed into render condition */}

      {clickedLogIn && <AdminApp />}
    </>
  );
}
