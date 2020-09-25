import React, { useEffect, useState } from "react";
import "../scss/Button.scss";



export type ButtonClass = {
  orange: string;
  blue: string;
  green: string;
};

export const ButtonColors: ButtonClass = {
    orange: "orange",
    blue: "blue",
    green: "green",
};

interface CustomButtonProps {
  text: string;
  color?: string;
  onClickedButton: (clicked: boolean) => void;
}


export default function CustomButton(props: CustomButtonProps): JSX.Element {
  const { text, color, onClickedButton } = props;
  return (
    <>
      <button
        className={`custom-button-${color}`}
        onClick={() => console.log("hi")}
      >
        <div className='button-text'>{text}</div>
        {/* <img src={GreenButton} onClick={() => onClickedButton(true)} /> */}
      </button>
    </>
  );
}
