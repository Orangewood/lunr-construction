import React from "react";
import { Switch, Router, Route } from "react-router-dom";
// import "./App.css";
import Test from "./admin/AdminMenu";
import IdolModal from "./IdolModal";
import ClockOutHeader from "./kiosk/ClockOutHeader";
import ClockOutBody from "./kiosk/ClockOutBody";
import CustomButton, {
  ButtonColors,
} from "../../common/components/CustomButton";
import KioskApp from "./kiosk/KioskApp";
import InformationContainer from "../../common/components/InformationContainer";
import BackgroundContainer from "../../common/components/BackgroundContainer";
import { Container, Row } from "react-bootstrap";
import ButtonClass from "../../common/components/CustomButton";
// import StartScreen from "../../common/components/StartScreen";
import AuthenticatedRoute from "../routes/AuthenticatedRouting";
import AdminPage from "./admin/AdminApp";
import AdminMenu from "./admin/AdminMenu";
import ModalTest from "./kiosk/ModalTest";

export default function App() {
  return (
    <>
      {/* <AdminMenu /> */}
      {/* <KioskApp /> */}
      {/* <IdolModal signOut={() => console.log('test')}/> */}
      <ModalTest />
    </>
  );
}
