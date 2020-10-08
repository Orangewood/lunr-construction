import React from "react";
import IdolModal from "./kiosk/IdolModal";
import KioskApp from "./kiosk/KioskApp";
import AdminMenu from "./admin/AdminMenu";
import ClockModal from "./kiosk/ClockModal";
import ProgressBar from "./kiosk/progress-bar/components/ProgressBar"

export default function App() {
  return (
    <>
      {/* <AdminMenu /> */}
      {/* <KioskApp /> */}
      {/* <IdolModal onClickedSignOut={() => console.log('test')} onClickedYes={() => console.log('test')}/> */}
      {/* <ClockModal /> */}
      <ProgressBar 
          progress={80}
          size={200}
          strokeWidth={15}
          circleOneStroke='#d9edfe'
          circleTwoStroke={"red"}
        />
    </>
  );
}
