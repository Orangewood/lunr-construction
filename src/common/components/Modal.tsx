import React from "react";
import CustomButton, {
  ButtonColors,
} from "./CustomButton";

import "../scss/Button.scss";
import "../scss/Modal.scss";

interface IdolModalProps {
  button1?: any;
  button2?: any;
  showModal?: boolean;
  modalBody?: JSX.Element;
  modalClose: () => void;
}

export default function Modal(props: IdolModalProps): JSX.Element {
  const { showModal, button1, button2, modalBody, modalClose } = props;
  
  return (
    <>
      {showModal && (
        <div className={`custom-modal ${showModal && 'modal-show'}`}>
          <div
            className="modal-wrapper"
          >
            <a
              className='modal-close-button'
              onClick={modalClose}
            >
                &#x2715;
            </a>
            <div className="modal-body text-center">
                {modalBody}
            </div>
            <div className='idol-modal-body d-flex justify-content-center'>
                {button1 &&
                    <div>
                        <CustomButton
                        small
                        id={`button-${button1.color}-small`}
                        color={ButtonColors[button1.color]}
                        text={button1.text}
                        onClickedButton={button1.onClick}
                        ></CustomButton>
                    </div>
                }
                {button2 &&
                    <div className="ml-3">
                        <CustomButton
                        small
                        id={`button-${button2.color}-small`}
                        color={ButtonColors[button2.color]}
                        text={button2.text}
                        onClickedButton={button2.onClick}
                        ></CustomButton>
                    </div>
                }
            </div>
          </div>
        </div>
      )}
    </>
  );
}
