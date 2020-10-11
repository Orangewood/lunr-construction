import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import BackgroundContainer from "../../../common/components/BackgroundContainer";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";
import InformationContainer from "../../../common/components/InformationContainer";
import { AppList } from "../../modules/AppList";
import ClockOutHeader from "./ClockOutHeader";
import ClockScreenBody from "./ClockScreenBody";
import ModalTest from "./ClockModal";
import IdolModal from "./IdolModal";

interface ClockScreenProps {
  onClickedHome: (app: number) => void;
  dayTotal?: any;
  weekTotal?: any;
  clockIn?: boolean;
}

export default function ClockScreen(props: ClockScreenProps) {
  const { onClickedHome, clockIn, dayTotal, weekTotal } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showIdolModal, setShowIdolModal] = useState<boolean>(false)

  const events = [
    'mousemove',
    'click',
    'keypress'
  ];

  useEffect(() => { 
    const timer = setTimeout(() => {
      setShowIdolModal(true)
    }, 2000);


    for( let e in events) {
      window.addEventListener(events[e], () => setShowIdolModal(false))
    }
    //why is mousemove not working?
    
    return () => clearTimeout(timer);
  }, [showIdolModal]);

  return (
    <>
      <BackgroundContainer nested />
      <ClockOutHeader dayTotal='10' weekTotal='14' />
      <InformationContainer clock>
        {!showModal && <ClockScreenBody clockIn={clockIn} />}
      </InformationContainer>
      {!showModal && (
        <CustomButton
          id='clock-screen-button'
          text={clockIn ? "Clock In" : "Clock Out"}
          color={ButtonColors.orange}
          onClickedButton={() => setShowModal(true)}
        />
      )}
      <CustomButton
        id='clock-screen-button-home'
        text={"Back to Home"}
        color={ButtonColors.blue}
        onClickedButton={() => onClickedHome(AppList.kioskHome)}
      />
      {showModal && (
        <ModalTest
          showModal={showModal}
          onClosedModal={() => setShowModal(false)}
          onClickedHome={() => onClickedHome(AppList.kioskHome)}
          clockIn
        />
      )}
      {showIdolModal &&
        <IdolModal onClickedSignOut={() => console.log('test')} onClickedYes={() => setShowIdolModal(false)} />
      }
    </>
  );
}
