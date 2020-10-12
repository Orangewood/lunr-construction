import React, { useState } from "react";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import AdminApp from "./AdminApp";
import AuthorizeScreen from "./AuthorizeScreen";

interface AdminMenuProps {
  setShowKiosk: (clicked: boolean) => void;
}

export default function AdminMenu(props: AdminMenuProps): JSX.Element {
  const {setShowKiosk} = props;
  const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);
  return (
    <>
      {!userAuthenticated && (
        <>
          <BackgroundContainer inverted />
          <AuthorizeScreen
            onLoginButtonClick={() => setUserAuthenticated(true)}
          />
          <CustomButton
            id='authorize-button'
            text={"Sign In"}
            color={ButtonColors.blue}
            onClickedButton={() => setUserAuthenticated(true)}
          />
        </>
      )}
      {/* TO DO: Boolean from T-sheets authentication to be passed into render condition */}

      {userAuthenticated && <AdminApp setShowKiosk={(clicked) => setShowKiosk(clicked)}/>}
    </>
  );
}
