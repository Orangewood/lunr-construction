import React, { useState } from "react";
import IdolModal from "./kiosk/IdolModal";
import KioskApp from "./kiosk/KioskApp";
import AdminMenu from "./admin/AdminMenu";
import ClockModal from "./kiosk/ClockModal";
import ProgressBar from "./kiosk/progress-bar/components/ProgressBar";

export default function App() {
  const [showKioskApp, setShowKioskApp] = useState<boolean>(false);
  return (
    <>
      {!showKioskApp && (
        <AdminMenu setShowKiosk={(clicked) => setShowKioskApp(clicked)} />
      )}
      {showKioskApp && <KioskApp />}
      {/* <IdolModal onClickedSignOut={() => console.log('test')} onClickedYes={() => console.log('test')}/> */}
      {/* <ClockModal /> */}
    </>
  );
}
