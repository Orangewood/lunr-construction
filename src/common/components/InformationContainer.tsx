import React, { ReactNode } from "react";
import "../scss/InformationContainer.scss";

interface InformationContainerProps {
  [x: string]: ReactNode;
  white?: boolean;
  kioskHome?: boolean;
  clock?: boolean;
}

export default function InformationContainer(
  props: InformationContainerProps
): JSX.Element {
  const { white, kioskHome, clock } = props;

  if (white)
    return <div className='information-container'>{props.children}</div>;
  if (kioskHome)
    return <div className='information-container-black'>{props.children}</div>;
  if (clock)
    return <div className='information-container-clock'>{props.children}</div>;
  else
    return (
      <div className='information-container-black-reverse'>
        {props.children}
      </div>
    );
}
