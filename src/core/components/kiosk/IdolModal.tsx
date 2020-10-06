import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CustomButton, {
  ButtonColors,
} from "../../../common/components/CustomButton";

import "../../../common/scss/Button.scss";
import "../../scss/kiosk/ModalTest.scss";

interface IdolModalProps {
  onClickedYes: () => void;
  onClickedSignOut: () => void;
  showModal?: boolean;
}

export default function IdolModal(props: IdolModalProps): JSX.Element {
  const { showModal, onClickedYes, onClickedSignOut } = props;
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
                onClickedSignOut();
              }}
            >
              X
            </button>
            <div id='idol-modal-text'>Are you still there?</div>
            <Row className='idol-modal-body'>
              <Col id='left-col'>
                <CustomButton
                  small
                  id='button-orange-small'
                  color={ButtonColors.orange}
                  text={"Sign me out"}
                  onClickedButton={() => {
                    setShow(false);
                    onClickedSignOut();
                  }}
                ></CustomButton>
              </Col>
              <Col id='right-col'>
                <CustomButton
                  small
                  id='button-green-small'
                  color={ButtonColors.green}
                  text={"Yes, I'm here"}
                  onClickedButton={() => {
                    setShow(false);
                    onClickedYes();
                  }}
                ></CustomButton>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </>
  );
}
