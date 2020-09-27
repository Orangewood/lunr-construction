import React, { ReactNode } from "react";
import "../scss/InformationContainer.scss";

interface InformationContainerProps {
  [x: string]: ReactNode;
  white: boolean;
}

export default function InformationContainer(props: InformationContainerProps) {
  const { white } = props;
  return (
    <>
      {white ? (
        <div className='information-container'>{props.children}</div>
      ) : (
        <div className='information-container-black'>{props.children}</div>
      )}
    </>
  );
}
