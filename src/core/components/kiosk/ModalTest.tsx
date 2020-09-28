import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CustomButton, { ButtonColors } from '../../../common/components/CustomButton';

import '../../scss/kiosk/ModalTest.scss';

interface ModalTestProps {
    idolModal?: boolean;
    clockIn?: boolean;
}

export default function ModalTest(props: ModalTestProps): JSX.Element {

    const [show, setShow] = useState<boolean>(true)
    return (
        <Container>
            <div className="modal-wrapper"
                style={{
                    transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}>
                    <Row className='modal-test'>
                        <button>x</button></Row>
                <Row className="modal-body">
                <CustomButton id="modal-button" color={ButtonColors.blue} text={'Back to Home'} onClickedButton={() => setShow(false)}></CustomButton>
                </Row>
            </div>
        </Container>
    )
}

