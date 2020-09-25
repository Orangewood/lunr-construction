import React, { ReactNode } from "react";
import "../scss/InformationContainer.scss";

interface InformationContainerProps {
  [x: string]: ReactNode;
}

export default function InformationContainer(props: InformationContainerProps) {
  return (
    <>
      <div className='information-container'>
        {props.children}
      </div>
    </>
  );
}
