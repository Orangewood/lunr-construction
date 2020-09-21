import React, { ReactNode } from "react";
import "../scss/BackgroundContainer.scss";

interface BackGroundContainerProps {
  [x: string]: ReactNode;
  solid?: boolean;
  split?: boolean;
  nested?: boolean;
}
export default function BackgroundContainer(
  props: BackGroundContainerProps
): JSX.Element {
  const { solid, split, nested } = props;
  const BackGroundSelection = () => {
    if (solid) return "solid-grey-background";
    if (split) return "split-background";
    if (nested) return "nested-background";
  };

  return (
    <>
      <div className={BackGroundSelection()}>{props.children} </div>
    </>
  );
}
