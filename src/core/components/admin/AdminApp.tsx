import React, { useState } from "react";
import AdminOptionsList from "./AdminOptionList";
import ClientSelect from "./ClientSelect";
import Foreman from "./ForemanScreen";
import "../../scss/admin/Admin.scss";
import { AppList } from "../../modules/AppList";

interface AdminMenuBodyProps {
  apiInformation?: any; //Api class to be sent here
  setShowKiosk: (clicked: boolean) => void;
}

export default function AdminApp(props: AdminMenuBodyProps): JSX.Element {
  const {apiInformation, setShowKiosk} = props;
  const [selectedApp, setSelectedApp] = useState<AppList>(AppList.home);

  return (
    <>
      {selectedApp === AppList.home && (
        <AdminOptionsList clickedApp={(value) => setSelectedApp(value)} setShowKiosk={(clicked) => setShowKiosk(clicked) }/>
      )}
      {selectedApp === AppList.client && (
        <ClientSelect
          onClickedSave={(selectedApp) => setSelectedApp(selectedApp)}
        />
      )}
      {selectedApp === AppList.foreman && (
        <Foreman onClickedSave={(selectedApp) => setSelectedApp(selectedApp)} />
      )}
      {/* {selectedApp === AppList.thermometer && (
        <Thermometer
          onClickedSave={(selectedApp) => setSelectedApp(selectedApp)}
        />
      )}
      {selectedApp === AppList.background && (
        <Background
          onClickedSave={(selectedApp) => setSelectedApp(selectedApp)}
        />
      )}
      {selectedApp === AppList.logoImage && (
        <Logo
          onClickedSave={(selectedApp) => setSelectedApp(selectedApp)}
        />
      )}

      */}
    </>
  );
}
