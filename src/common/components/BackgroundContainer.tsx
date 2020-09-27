import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";
import "../scss/BackgroundContainer.scss";

interface BackGroundContainerProps {
  [x: string]: ReactNode;
  solid?: boolean;
  split?: boolean;
  nested?: boolean;
  inverted?: boolean;
  building?: boolean;
}
export default function BackgroundContainer(
  props: BackGroundContainerProps
): JSX.Element {
  const { solid, split, nested, inverted, building } = props;
  const BackGroundSelection = () => {
    if (solid) return "solid-grey-background";
    if (split) return "split-background";
    if (nested) return "nested";
    if (inverted) return "nested-inverted";
    if (building) return "kiosk-start"
  };

  return (
    <>
      <div  className={BackGroundSelection()}> {props.children} </div>
    </>
  );
}
