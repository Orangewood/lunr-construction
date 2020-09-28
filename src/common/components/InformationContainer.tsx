import React, { ReactNode } from "react";
import "../scss/InformationContainer.scss";

interface InformationContainerProps {
  [x: string]: ReactNode;
  white: boolean;
  clockIn?: boolean;
}

export default function InformationContainer(props: InformationContainerProps) {
  const { white, clockIn } = props;
  return (
    <>
      {white ? (
        <div className='information-container'>{props.children}</div>
      ) : clockIn ? (
        <div className='information-container-clock-in'>{props.children}</div>
      ) : (
        <div className='information-container-black'>{props.children}</div>
      )}
    </>
  );
}
