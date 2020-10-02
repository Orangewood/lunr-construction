import React, { useState } from "react";
import AdminOptionsList from "./AdminOptionList";
import ClientSelect from "./ClientSelect";
import Foreman from "./ForemanScreen";
import "../../scss/admin/Admin.scss";
import { AppList } from "../../modules/AppList";

interface AdminMenuBodyProps {
  apiInformation?: any; //Api class to be sent here
}

export default function AdminApp(props: AdminMenuBodyProps): JSX.Element {
  const [selectedApp, setSelectedApp] = useState<AppList>(0);

  return (
    <>
      {selectedApp === AppList.home && (
        <AdminOptionsList clickedApp={(value) => setSelectedApp(value)} />
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
