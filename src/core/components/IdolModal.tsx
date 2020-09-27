import React, { useEffect, useState } from "react";
import { Button, Row, Col, Modal } from "react-bootstrap";

interface IdolModalProps {
  signOut: (status: boolean) => void;
}

export default function IdolModal(props: IdolModalProps): JSX.Element {
  const { signOut } = props;
  const [continueSession, setContinueSession] = useState<boolean>(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    continueSession && signOut(continueSession);
  }, [continueSession]);

  return (
    <>
      <Modal size={"lg"} show={true}>
        <Modal.Header closeButton>Are you still there?</Modal.Header>
        <Row>
          <Col>
            <Button onClick={() => setContinueSession(true)}>
              Yes, I'm here
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => {
                setContinueSession(false);
                setShow(false);
              }}
            >
              Sign me out
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
}
