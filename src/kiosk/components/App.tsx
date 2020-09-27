import React from "react";
import { Switch, Router, Route } from "react-router-dom";
// import "./App.css";
import Test from "./admin/AdminMenu";
import IdolModal from "./IdolModal";
import ClockOutHeader from "./clockout/ClockOutHeader";
import ClockOutBody from "./clockout/ClockOutBody";
import CustomButton, {
  ButtonColors,
} from "../../common/components/CustomButton";
import ClockOut from "./clockout/ClockOut";
import InformationContainer from "../../common/components/InformationContainer";
import BackgroundContainer from "../../common/components/BackgroundContainer";
import { Container, Row } from "react-bootstrap";
import ButtonClass from "../../common/components/CustomButton";
// import StartScreen from "../../common/components/StartScreen";
import AuthenticatedRoute from "../routes/AuthenticatedRouting";
import AdminPage from "./admin/AdminApp";
import AdminMenu from "./admin/AdminMenu";
import ModalTest from "./clockout/ModalTest";

export default function App() {
  return (
    <>
      {/* <AdminMenu /> */}
      {/* <ClockOut /> */}
      {/* <IdolModal signOut={() => console.log('test')}/> */}
      <ModalTest />
    </>
  );
}
