import React from "react";
import IdolModal from "./kiosk/IdolModal";
import KioskApp from "./kiosk/KioskApp";
import AdminMenu from "./admin/AdminMenu";
import ClockModal from "./kiosk/ClockModal";

export default function App() {
  return (
    <>
      {/* <AdminMenu /> */}
      <KioskApp />
      {/* <IdolModal signOut={() => console.log('test')}/> */}
      {/* <ClockModal /> */}
    </>
  );
}
