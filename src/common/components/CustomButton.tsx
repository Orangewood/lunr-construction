import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import OrangeButton from "../images/OrangeButton.svg";
import BlueButton from "../images/BlueButton.svg";
import GreenButton from "../images/GreenButton.svg";

import "../scss/Button.scss";

export type ButtonClass = {
  orange: boolean;
  blue: boolean;
  green: boolean;
};

interface CustomButtonProps {
  text: string;
  color?: ButtonClass;
  onClickedButton: (clicked: boolean) => void;
}

export default function CustomButton(props: CustomButtonProps): JSX.Element {
  const {text, color, onClickedButton} = props;
  return (
    <>
    <button className="custom-button">
      <div className="button-text">Sign In</div>
    {/* <img src={GreenButton} onClick={() => onClickedButton(true)} /> */}
    </button>

    </>
  );
}
