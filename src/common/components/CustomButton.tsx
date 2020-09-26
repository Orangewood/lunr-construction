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
  id?: string;
  onClickedButton: (clicked: any) => void;
}

export default function CustomButton(props: CustomButtonProps): JSX.Element {
  const { text, color, onClickedButton, id } = props;
  return (
    <>
      <button
        className={`custom-button-${color}`}
        id={`${id}`}
        onClick={() => onClickedButton(true)}
      >
        <div className='button-text'>{text}</div>
      </button>
    </>
  );
}
