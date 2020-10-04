import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";

import "../../scss/kiosk/ModalTest.scss";

interface ModalTestProps {
  onClickedHome: () => void;
  onClosedModal: () => void;
  info?: any; //Information to be passed from api or localstorage to show in modal
  showModal?: boolean;
  clockIn?: boolean;
  clockOut?: boolean;
  error?: boolean;
}

export default function ModalTest(props: ModalTestProps): JSX.Element {
  const {
    showModal,
    clockIn,
    clockOut,
    error,
    onClickedHome,
    onClosedModal,
  } = props;
  const [show, setShow] = useState<boolean>(true);
  const currentTime = new Date();

  useEffect(() => {
    showModal && setShow(showModal);
  }, [showModal]);

  return (
    <>
      {show && (
        <Container>
          <div
            className='modal-wrapper'
            style={{
              transform: show ? "translateY(0vh)" : "translateY(-100vh)",
              opacity: show ? "1" : "0",
            }}
          >
            <button
              className='modal-close-button'
              onClick={() => {
                setShow(false);
                onClosedModal();
              }}
            >
              X
            </button>
            <Row className='modal-body'>
              {clockIn && (
                <>
                  <div id='modal-text'>
                    You <p style={{ color: "#009245" }}>clocked in</p> at
                    <br />
                    {currentTime.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </div>
                </>
              )}
              {clockOut && (
                <div id='modal-text'>
                  You <div style={{ color: "#009245" }}>clocked out</div> at
                  <br />
                  {currentTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </div>
              )}
              {error && (
                <div id='modal-text'>
                  You are Not clocked in. Please call your supervisor.
                </div>
              )}
            </Row>
            <CustomButton
              id='modal-button'
              color={ButtonColors.blue}
              text={"Back to Home"}
              onClickedButton={() => {
                setShow(false);
                onClickedHome();
              }}
            ></CustomButton>
          </div>
        </Container>
      )}
    </>
  );
}
