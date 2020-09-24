import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import OrangeButton from "../images/OrangeButton.svg";
import BlueButton from "../images/BlueButton.svg";
import GreenButton from "../images/GreenButton.svg";

import "../scss/Button.scss";

export type ButtonClass = {
  orange: "orangeBody";
  blue: "backToHomeButton";
  green: "greenBody";
};

interface CustomButtonProps {
  text: string;
  type?: ButtonClass;
}

export default function CustomButton(props: CustomButtonProps): JSX.Element {
  return (
    <>
      <Button>
        {props.text}
        {/* <img src={}></img> */}
      </Button>
    </>
  );
}
