import React from "react";
import { Switch, Router, Route } from "react-router-dom";
// import "./App.css";
import Test from "./test";
import IdolModal from "./IdolModal";
import ClockOutHeader from "./clockout/ClockOutHeader";
import ClockOutBody from "./clockout/ClockOutBody";
import CustomButton from "../../common/components/CustomButton";
import ClockOut from "./clockout/ClockOut";
import InformationContainer from "../../common/components/InformationContainer";
import BackgroundContainer from "../../common/components/BackgroundContainer";
import { Container, Row } from "react-bootstrap";
import ButtonClass from "../../common/components/CustomButton";
import StartScreen from "../../common/components/StartScreen";
import AuthenticatedRoute from "../routes/AuthenticatedRouting";
import AdminPage from "./Admin"

export default function App() {
  const authenticated = true;
  return (
    <>
      <Switch>
        <Route path='/'/>
        <Route path='/authorize' />
        <AuthenticatedRoute 
          path='/admin' 
          exact
          authenticated={true}
          pass={<AdminPage />}
        />
        {/* <AuthenticatedRoute path='/client' />
        <AuthenticatedRoute path='/client_info' />
        <AuthenticatedRoute path='/start' />
        <AuthenticatedRoute path='/test' />
        <AuthenticatedRoute path='/test2' /> */}
      </Switch>
    </>
  );
}

