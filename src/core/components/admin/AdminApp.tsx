import React, { useState } from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import "../../scss/Admin.scss";
import AdminOptionsList from "./AdminOptionList";
import ClientSelect from "./ClientSelect";
import Foreman from "./ForemanScreen";

export enum AppList {
  home = 0,
  client = 1,
  thermometer = 2,
  background = 3,
  logoImage = 4,
  foreman = 5,
}

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