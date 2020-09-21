import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './kiosk/components/test'
import IdolModal from './kiosk/components/IdolModal'
import ClockOutHeader from './kiosk/components/clockout/ClockOutHeader'
import ClockOutBody from './kiosk/components/clockout/ClockOutBody'
import CustomButton from './common/components/CustomButton'
import ClockOut from './kiosk/components/clockout/ClockOut'
import InformationContainer from './common/components/InformationContainer'
import BackgroundContainer from './common/components/BackgroundContainer'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
    <BackgroundContainer nested/> 
      <InformationContainer />
         <CustomButton text={"Welcome"}/>
       <InformationContainer/>
    <BackgroundContainer/>
    </>
  );
}

export default App;
